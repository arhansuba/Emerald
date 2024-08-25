// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract RewardDistribution is Ownable, Pausable {
    IERC20 public rewardToken;  // The token used for rewards

    struct RewardPlan {
        uint256 emissionThreshold;
        uint256 rewardAmount;
    }

    RewardPlan[] public rewardPlans;

    mapping(address => uint256) public companyEmissions;
    mapping(address => bool) public hasClaimed;

    event RewardClaimed(address indexed company, uint256 rewardAmount);
    event RewardPlanAdded(uint256 emissionThreshold, uint256 rewardAmount);

    constructor(IERC20 _rewardToken) Ownable(msg.sender) Pausable() {
        rewardToken = _rewardToken;
    }

    function addRewardPlan(uint256 emissionThreshold, uint256 rewardAmount) external onlyOwner {
        rewardPlans.push(RewardPlan({
            emissionThreshold: emissionThreshold,
            rewardAmount: rewardAmount
        }));
        
        emit RewardPlanAdded(emissionThreshold, rewardAmount);
    }

    function reportEmissions(address company, uint256 emission) external onlyOwner whenNotPaused {
        companyEmissions[company] = emission;
    }

    function claimReward() external whenNotPaused {
        require(!hasClaimed[msg.sender], "Reward already claimed");

        uint256 emission = companyEmissions[msg.sender];
        require(emission > 0, "No emission data available");

        uint256 rewardAmount = calculateReward(emission);
        require(rewardAmount > 0, "No reward for the given emission");

        hasClaimed[msg.sender] = true;
        require(rewardToken.transfer(msg.sender, rewardAmount), "Reward transfer failed");

        emit RewardClaimed(msg.sender, rewardAmount);
    }

    function calculateReward(uint256 emission) internal view returns (uint256) {
        uint256 rewardAmount = 0;
        for (uint i = 0; i < rewardPlans.length; i++) {
            if (emission <= rewardPlans[i].emissionThreshold) {
                rewardAmount = rewardPlans[i].rewardAmount;
                break;
            }
        }
        return rewardAmount;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}
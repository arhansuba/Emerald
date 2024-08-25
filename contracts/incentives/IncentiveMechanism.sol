// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract IncentiveMechanism is Ownable {
    IERC20 public sxchToken;

    struct EnvironmentalGoal {
        uint256 id;
        address participant;
        uint256 targetAmount;
        uint256 achievedAmount;
        bool completed;
    }

    uint256 public goalCount;
    mapping(uint256 => EnvironmentalGoal) public goals;
    mapping(address => uint256[]) public participantGoals;

    event GoalCreated(uint256 goalId, address indexed participant, uint256 targetAmount);
    event GoalAchieved(uint256 goalId, address indexed participant, uint256 achievedAmount);
    event RewardDistributed(uint256 goalId, address indexed participant, uint256 rewardAmount);

    // constructor expects an IERC20 token address
    constructor(address _sxchToken) Ownable(msg.sender) {
        sxchToken = IERC20(_sxchToken); // Pass token address to IERC20 interface
    }

    // Create a new environmental goal for a participant
    function createGoal(address participant, uint256 targetAmount) external onlyOwner {
        goalCount++;
        goals[goalCount] = EnvironmentalGoal({
            id: goalCount,
            participant: participant,
            targetAmount: targetAmount,
            achievedAmount: 0,
            completed: false
        });
        participantGoals[participant].push(goalCount);

        emit GoalCreated(goalCount, participant, targetAmount);
    }

    // Update the achieved amount towards a goal
    function updateGoal(uint256 goalId, uint256 amountAchieved) external onlyOwner {
        EnvironmentalGoal storage goal = goals[goalId];
        require(!goal.completed, "Goal already completed");
        require(amountAchieved > 0, "Achieved amount must be greater than 0");

        goal.achievedAmount += amountAchieved;

        emit GoalAchieved(goalId, goal.participant, goal.achievedAmount);

        if (goal.achievedAmount >= goal.targetAmount) {
            goal.completed = true;
            distributeReward(goalId);
        }
    }

    // Distribute reward once the goal is completed
    function distributeReward(uint256 goalId) internal {
        EnvironmentalGoal storage goal = goals[goalId];
        require(goal.completed, "Goal not completed");

        uint256 rewardAmount = calculateReward(goal.targetAmount);
        sxchToken.transfer(goal.participant, rewardAmount);

        emit RewardDistributed(goalId, goal.participant, rewardAmount);
    }

    // Calculate reward based on the goal's target amount
    function calculateReward(uint256 targetAmount) public pure returns (uint256) {
        // Example: 1 SXCH token for every unit of the target amount
        return targetAmount * 1 ether;
    }

    // Retrieve all goal IDs for a participant
    function getParticipantGoals(address participant) external view returns (uint256[] memory) {
        return participantGoals[participant];
    }
}

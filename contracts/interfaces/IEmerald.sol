// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IEmerald {
    // Event emitted when a new goal is created
    event GoalCreated(uint256 indexed goalId, address indexed participant, uint256 targetAmount);

    // Event emitted when a goal is updated
    event GoalUpdated(uint256 indexed goalId, uint256 achievedAmount);

    // Event emitted when a reward is distributed
    event RewardDistributed(uint256 indexed goalId, address indexed participant, uint256 rewardAmount);

    // Create a new environmental goal
    function createGoal(address participant, uint256 targetAmount) external;

    // Update the achieved amount for a goal
    function updateGoal(uint256 goalId, uint256 amountAchieved) external;

    // Calculate and distribute reward to the participant for a completed goal
    function distributeReward(uint256 goalId) external;

    // Retrieve the details of a goal by its ID
    function getGoal(uint256 goalId) external view returns (
        address participant,
        uint256 targetAmount,
        uint256 achievedAmount,
        bool completed
    );

    // Retrieve all goal IDs for a participant
    function getParticipantGoals(address participant) external view returns (uint256[] memory);
}

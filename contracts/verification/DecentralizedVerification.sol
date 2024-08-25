// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract DecentralizedVerification is Ownable(msg.sender), Pausable() {
    enum VerificationState { Pending, Approved, Rejected }

    struct VerificationRequest {
        uint256 id;
        address participant;
        uint256 goalId;
        string claimDetails;
        VerificationState state;
        uint256 createdAt;
        uint256 updatedAt;
    }

    uint256 public requestCount;
    mapping(uint256 => VerificationRequest) public verificationRequests;
    mapping(address => uint256[]) public participantRequests;

    event VerificationRequestCreated(uint256 indexed requestId, address indexed participant, uint256 goalId, string claimDetails);
    event VerificationRequestUpdated(uint256 indexed requestId, VerificationState state);

    modifier onlyParticipant(uint256 requestId) {
        require(msg.sender == verificationRequests[requestId].participant, "Not authorized");
        _;
    }

    modifier onlyPending(uint256 requestId) {
        require(verificationRequests[requestId].state == VerificationState.Pending, "Request is not pending");
        _;
    }

    function createVerificationRequest(uint256 goalId, string calldata claimDetails) external whenNotPaused {
        requestCount++;
        verificationRequests[requestCount] = VerificationRequest({
            id: requestCount,
            participant: msg.sender,
            goalId: goalId,
            claimDetails: claimDetails,
            state: VerificationState.Pending,
            createdAt: block.timestamp,
            updatedAt: block.timestamp
        });
        participantRequests[msg.sender].push(requestCount);

        emit VerificationRequestCreated(requestCount, msg.sender, goalId, claimDetails);
    }

    function approveRequest(uint256 requestId) external onlyOwner onlyPending(requestId) {
        VerificationRequest storage request = verificationRequests[requestId];
        request.state = VerificationState.Approved;
        request.updatedAt = block.timestamp;

        emit VerificationRequestUpdated(requestId, VerificationState.Approved);
    }

    function rejectRequest(uint256 requestId) external onlyOwner onlyPending(requestId) {
        VerificationRequest storage request = verificationRequests[requestId];
        request.state = VerificationState.Rejected;
        request.updatedAt = block.timestamp;

        emit VerificationRequestUpdated(requestId, VerificationState.Rejected);
    }

    function getRequest(uint256 requestId) external view returns (
        address participant,
        uint256 goalId,
        string memory claimDetails,
        VerificationState state,
        uint256 createdAt,
        uint256 updatedAt
    ) {
        VerificationRequest storage request = verificationRequests[requestId];
        return (
            request.participant,
            request.goalId,
            request.claimDetails,
            request.state,
            request.createdAt,
            request.updatedAt
        );
    }

    function getParticipantRequests(address participant) external view returns (uint256[] memory) {
        return participantRequests[participant];
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}

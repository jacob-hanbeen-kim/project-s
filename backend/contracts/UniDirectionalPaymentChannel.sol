// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract UniDirectionalPaymentChannel is ReentrancyGuard {
    using ECDSA for bytes32;

    address payable public sender;
    address payable public receiver;
    address payable public platform;
    uint256 private constant DURATION = 7 * 24 * 60 * 60; // 7 days
    uint256 public expiresAt;
    uint256 public commission_percentage; // out of 100

    event PaymentCompleted(
        uint256 timestamp,
        address sender,
        address receiver,
        uint256 amountTransferred
    );

    event ContractClosed(uint256 timestamp);

    event ContractCanceled(uint256 timestamp);

    constructor(
        address payable _receiver,
        address payable _platform,
        uint256 _commission_percentage
    ) payable {
        require(_receiver != address(0), "receiver = zero address");
        require(_platform != address(0), "platform = zero address");
        sender = payable(msg.sender);
        receiver = _receiver;
        platform = _platform;
        commission_percentage = _commission_percentage;
        expiresAt = block.timestamp + DURATION;
    }

    function _getHash(uint256 _amount) private view returns (bytes32) {
        // NOTE: sign with address of this contract to protect agains
        // replay attack on other contracts
        return keccak256(abi.encodePacked(address(this), _amount));
    }

    function getHash(uint256 _amount) external view returns (bytes32) {
        return _getHash(_amount);
    }

    function _getEthSignedHash(uint256 _amount) private view returns (bytes32) {
        return _getHash(_amount).toEthSignedMessageHash();
    }

    function getEthSignedHash(uint256 _amount) external view returns (bytes32) {
        return _getEthSignedHash(_amount);
    }

    function _verify(uint256 _amount, bytes memory _sig)
        private
        view
        returns (bool)
    {
        return _getEthSignedHash(_amount).recover(_sig) == sender;
    }

    function verify(uint256 _amount, bytes memory _sig)
        external
        view
        returns (bool)
    {
        return _verify(_amount, _sig);
    }

    function close(uint256 _amount, bytes memory _sig) external nonReentrant {
        require(msg.sender == receiver, "!receiver");
        require(_verify(_amount, _sig), "invalid sig");

        uint256 platformFee = (_amount * commission_percentage) / 100;
        _amount -= platformFee;

        (bool sent, ) = receiver.call{value: _amount}("");
        require(sent, "Failed to send Ether");
        emit PaymentCompleted(block.timestamp, sender, receiver, _amount);

        payable(platform).transfer(platformFee);

        emit ContractClosed(block.timestamp);
        selfdestruct(sender);
    }

    function cancel() external {
        require(msg.sender == sender, "!sender");
        require(block.timestamp >= expiresAt, "!expired");
        emit ContractCanceled(block.timestamp);
        selfdestruct(sender);
    }
}

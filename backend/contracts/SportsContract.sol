// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

// An example of a basic wallet.
// Anyone can send ETH.
// Only the owner can withdraw.
contract SportsContract is Ownable {
    constructor() {
    }

    event Received(address, uint);
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
    
    function withdraw(uint _amount) external onlyOwner {
        payable(msg.sender).transfer(_amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
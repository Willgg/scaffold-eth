pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  event RegisterUser(address sender, string mailboxStorage);

  string public purpose = "Building Unstoppable Apps!!!";
  mapping(address => string) private mailboxes;

  constructor() payable {
    // what should we do on deploy?
  }

  function setPurpose(string memory newPurpose) public {
      purpose = newPurpose;
      console.log(msg.sender,"set purpose to",purpose);
  }


  function getUserInbox(address user) public view returns (string memory) {
    console.log(mailboxes[user]);
    return mailboxes[user];
  }

  function registerUser(string memory mailboxStorage) public {
      mailboxes[msg.sender] = mailboxStorage;
      console.log(msg.sender, mailboxStorage);
      //emit RegisterUser(msg.sender, mailboxStorage);
  }

  // to support receiving ETH by default
  receive() external payable {}
  fallback() external payable {}
}

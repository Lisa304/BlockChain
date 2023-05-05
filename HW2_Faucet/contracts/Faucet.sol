// SPDX-License-Identifier: MIT

// Version of Solidity compiler this program was written for
pragma solidity ^0.8.19;

contract Owned {
    address payable owner;

    // Contract constructor: set owner
    constructor() {
        owner = payable(msg.sender);
    }

    // Access control modifier
    modifier onlyOwner {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
}

contract Mortal is Owned {
    // Contract destructor
    function destroy() public onlyOwner {
        selfdestruct(owner);
    }
}

contract Faucet is Mortal {
    event Withdrawal(address indexed to, uint amount);
    event Deposit(address indexed from, uint amount);

    uint balance =  address(this).balance;

    receive() payable external {
        balance += msg.value; //存款
        emit Deposit(msg.sender, msg.value);
    }

    function deposit() public payable {
        balance += msg.value; //存款
        emit Deposit(msg.sender, msg.value);
    }

    function get_owner() view public returns (address) {
        return owner;
    }

    function get_balance() view public returns (uint){
        return address(this).balance;
    }

    // Give out ether to anyone who asks
    function withdraw(uint256 withdraw_amount, address payable dest) public {
        require(
            balance >= withdraw_amount,
            "Insufficient balance in faucet for withdrawal request"
        );

        balance -= withdraw_amount;
        // Send the amount to the address that requested it
        dest.transfer(withdraw_amount);

        emit Withdrawal(dest, withdraw_amount);
    }

}
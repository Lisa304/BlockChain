// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./Faucet.sol";

contract CallFaucet is Faucet{
    Faucet _faucet;
    constructor() {
        _faucet = new Faucet();
    }
    
    function withdraw_caller(uint256 amount, address payable addrdest) public onlyOwner{
        _faucet.withdraw(amount,addrdest);
    }
}
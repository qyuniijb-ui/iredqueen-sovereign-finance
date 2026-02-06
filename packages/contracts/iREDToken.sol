pragma solidity ^0.8.0;
contract iREDToken {
    string public name = "iRED Token";
    string public symbol = "IRED";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    constructor(uint256 initialSupply) {
        totalSupply = initialSupply;
    }
}

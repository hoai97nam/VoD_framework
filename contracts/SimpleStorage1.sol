pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
contract SimpleStorage1 {
    constructor() public payable{}
    function() external payable {}
    string[] storedData;
    string[] storedData1;
    address[] storedData2;
    mapping(address => uint) public count;
    function upVote(address x) public
    {
        count[x] ++;
    }
    function getUpVote(address x) public view returns(uint)
    {
        return count[x];
    }
    function grant(address payable x) public
    {
        // require(address(this).balance >= 1 ether);
        x.transfer(1 ether);
    }
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    function set(string memory x, string memory y, address z) public {
        storedData.push(x);
        storedData1.push(y);
        storedData2.push(z);
    }
    function get() public view returns (string[] memory, string[] memory, address[] memory) {
        return (storedData, storedData1, storedData2);
    }
    function length() public view returns (uint)
    {
        return storedData.length;
    }
}
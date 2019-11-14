pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
contract ContentStorage {
    string[] hashCode;
    string[] title;
    string[] description;
    address[] account;
    function addContent(string memory _hashCode, string memory _title, string memory _description, address _usrAddress) public{
        hashCode.push(_hashCode);
        title.push(_title);
        description.push(_description);
        account.push(_usrAddress);
    }
    function inspect() public view returns (uint) {
        return hashCode.length;
    }
    function getHash() public view returns (string[] memory)
    {
        return hashCode;
    }
    function getTitle() public view returns (string[] memory )
    {
        return title;
    }
    function getDes() public view returns (string[] memory )
    {
        return description;
    }
    function getAdd() public view returns (address[] memory )
    {
        return account;
    }
}
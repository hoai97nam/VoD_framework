var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SimpleStorage1 = artifacts.require("./SimpleStorage1.sol");
var ContentStorage = artifacts.require("./ContentStorage.sol")

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SimpleStorage1);
  deployer.deploy(ContentStorage);
};

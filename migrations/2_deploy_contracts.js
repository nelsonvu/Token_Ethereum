const PhantomAtulaToken = artifacts.require("PhantomAtulaToken");

module.exports = async function(deployer, _, accounts) {
    await deployer.deploy(PhantomAtulaToken, "PhanTomAtulaToken", "PAT", 0, 1000)
};
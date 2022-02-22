// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

    const clearingHouseConfig = await contractAt("ClearingHouseConfig", contracts.ClearingHouseConfig.address);

     // setMaxMarketsPerAccount
    const maxMarketsPerAccountArg = 3;
    await clearingHouseConfig.setMaxMarketsPerAccount(maxMarketsPerAccountArg);

    console.log("ClearingHouseConfig Set Max MarketsPerAccount Done !", clearingHouseConfig.address, "PerAccount:", maxMarketsPerAccountArg);


    // setSettlementTokenBalanceCap
    const cap = 1000000000000;   
    await clearingHouseConfig.setSettlementTokenBalanceCap(cap);

    console.log("ClearingHouseConfig Set Token Balance Cap Done !", clearingHouseConfig.address, "cap:", cap);


    // set MultiSigWallet address
    // const address = "0x...";   
    // await clearingHouseConfig.setOwner(address);

    // console.log("ClearingHouseConfig setOwner Done !", clearingHouseConfig.address, "cap:", address);


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

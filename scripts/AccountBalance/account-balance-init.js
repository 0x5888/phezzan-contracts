// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { contractAt } = require("../helpers")


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

    const accountBalance = await contractAt("AccountBalance", "0x3776c1195cBcD987813763B9a9658Ec802366317");
    
    const clearingHouseConfigArg = "0xD640e4FB5D5A97B29531c4499543F6be5699eC5d";
    const orderBookArg = "0xDb4762e3EAA5c4332f868ef1Dfcf7Ed5E3b654BC";

    await accountBalance.initialize(clearingHouseConfigArg, orderBookArg);   

    console.log("AccountBalance Init Done !", accountBalance.address);


    


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

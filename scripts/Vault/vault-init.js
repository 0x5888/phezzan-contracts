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

    const vault = await contractAt("Vault", "0x9B6cd96496B2f8Ffa7BEca679061aFf66eBDe20f");
  
    const insuranceFundArg = "0xd2177FfC4079A4912e0638a4b25Eb9547F376EDF";
    const clearingHouseConfigArg = "0xD640e4FB5D5A97B29531c4499543F6be5699eC5d";
    const accountBalanceArg = "0x3776c1195cBcD987813763B9a9658Ec802366317";
    const exchangeArg = "0xB518a56e157fC891BE072D235B5EaC0e605dCBbC";
    await vault.initialize(insuranceFundArg, clearingHouseConfigArg, accountBalanceArg, exchangeArg);  

    console.log("Vault Init Done !", vault.address);


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

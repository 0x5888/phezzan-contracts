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

    const clearingHouse = await contractAt("ClearingHouse", "0xC7A02A73D00aAD2772BaD35Bf67bc54051dDC7a8");

    const clearingHouseConfigArg = "0xD640e4FB5D5A97B29531c4499543F6be5699eC5d"
    const vaultArg = "0x9B6cd96496B2f8Ffa7BEca679061aFf66eBDe20f"
    const quoteTokenArg = "0x96e7588978B10CEAE986A3aE996A94D5f38e3993"  // == 18   USDC ? 
    const uniV3FactoryArg = "0x1F98431c8aD98523631AE4a59f267346ea31F984"
    const exchangeArg = "0xB518a56e157fC891BE072D235B5EaC0e605dCBbC"
    const accountBalanceArg = "0x3776c1195cBcD987813763B9a9658Ec802366317"
    const insuranceFundArg = "0xd2177FfC4079A4912e0638a4b25Eb9547F376EDF"

    await clearingHouse.initialize(
      clearingHouseConfigArg,
      vaultArg,
      quoteTokenArg,
      uniV3FactoryArg,
      exchangeArg,
      accountBalanceArg,
      insuranceFundArg
      );

    console.log("ClearingHouse Init Done !", clearingHouse.address);


    


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

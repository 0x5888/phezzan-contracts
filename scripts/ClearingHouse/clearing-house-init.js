// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts, externalContracts } = require("../../metadata/rinkeby.json")

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

    const clearingHouse = await contractAt("ClearingHouse", contracts.ClearingHouse.address);

    const clearingHouseConfigArg = contracts.ClearingHouseConfig.address
    const vaultArg = contracts.Vault.address
    const quoteTokenArg = contracts.vUST.address  //  vUST 
    const uniV3FactoryArg = externalContracts.UniswapV3Factory
    const exchangeArg = contracts.Exchange.address
    const accountBalanceArg = contracts.AccountBalance.address
    const insuranceFundArg = contracts.InsuranceFund.address

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

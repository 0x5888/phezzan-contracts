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

    const marketRegistry = await contractAt("MarketRegistry", contracts.MarketRegistry.address);

    const uniswapV3FactoryArg = externalContracts.UniswapV3Factory
    const quoteTokenArg = contracts.QuoteToken.address        // vUST

    await marketRegistry.initialize(uniswapV3FactoryArg, quoteTokenArg);      // UNI-V3  USDC

    console.log("MarketRegistry Init Done !", marketRegistry.address);


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

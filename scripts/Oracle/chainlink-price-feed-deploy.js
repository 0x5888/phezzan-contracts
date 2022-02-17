// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
require('hardhat-deploy');
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
    /**
     * Network: Rinekby
     * Aggregator: USDC/USD
     * Address: 0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB
     */
    // const AggregatorV3InterfaceAddress = "0xa24de01df22b63d23Ebc1882a5E3d4ec0d907bFB";  // Rinkeby USDC/USD 
    const AggregatorV3InterfaceAddress = "0x9211c6b3BF41A10F78539810Cf5c64e1BB78Ec60";  // Kovan USDC/USD 
    

  // We get the contract to deploy
    const ChainlinkPriceFeed = await hre.ethers.getContractFactory("ChainlinkPriceFeed");
    const chainlinkPriceFeed = await ChainlinkPriceFeed.deploy(AggregatorV3InterfaceAddress,{
        gasLimit: 2500000,
        gasPrice: 250000000000
    });

    await chainlinkPriceFeed.deployed();

    console.log("chainlinkPriceFeed deployed to:", chainlinkPriceFeed.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

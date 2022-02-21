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

    const orderBook = await contractAt("OrderBook", "0xDb4762e3EAA5c4332f868ef1Dfcf7Ed5E3b654BC");
    const marketRegistryArg = "0x31178DBfDe7CDFd40D607c3e49Ea26CeE100B48D";

    await orderBook.initialize(marketRegistryArg);  

    console.log("orderBook Init Done !", orderBook.address);


    


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

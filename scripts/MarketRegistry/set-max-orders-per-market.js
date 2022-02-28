const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const marketRegistry = await contractAt("MarketRegistry", contracts.MarketRegistry.address);

    const maxOrdersPerMarketArg = 5; 

    await marketRegistry.setMaxOrdersPerMarket(maxOrdersPerMarketArg);
    console.log("marketRegistry  setMaxOrdersPerMarket Done !", contracts.MarketRegistry.address, "maxOrdersPerMarketArg:", maxOrdersPerMarketArg);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

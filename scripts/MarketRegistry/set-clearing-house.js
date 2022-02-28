const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const marketRegistry = await contractAt("MarketRegistry", contracts.MarketRegistry.address);

     // setClearingHouse
    const clearingHouseAddress = contracts.ClearingHouse.address;
    await marketRegistry.setClearingHouse(clearingHouseAddress);
    console.log("marketRegistry setClearingHouse Done !", contracts.MarketRegistry.address, "Exchange:", clearingHouseAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

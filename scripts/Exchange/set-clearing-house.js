const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const exchange = await contractAt("Exchange", contracts.Exchange.address);

     // setClearingHouse
    const clearingHouseAddress = contracts.ClearingHouse.address;
    await exchange.setClearingHouse(clearingHouseAddress);
    console.log("Exchange setClearingHouse Done !", contracts.Exchange.address, "Exchange:", clearingHouseAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

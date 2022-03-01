const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const orderBook = await contractAt("OrderBook", contracts.OrderBook.address);

     // setClearingHouse
    const clearingHouseAddress = contracts.ClearingHouse.address;
    await orderBook.setClearingHouse(clearingHouseAddress);
    console.log("orderBook setClearingHouse Done !", contracts.Exchange.address, "orderBook:", orderBook.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

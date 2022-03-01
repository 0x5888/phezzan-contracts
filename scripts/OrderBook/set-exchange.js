const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const orderBook = await contractAt("OrderBook", contracts.OrderBook.address);

     // setExchange
    const exchangeAddress = contracts.Exchange.address;
    await orderBook.setExchange(exchangeAddress);
    console.log("orderBook setClearingHouse Done !",orderBook.address, "Exchange:", exchangeAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

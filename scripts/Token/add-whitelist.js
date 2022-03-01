const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts, pools } = require("../../metadata/rinkeby.json")

async function main() {

    const quoteToken = await contractAt("QuoteToken", contracts.vUST.address);

    // addWhitelist(address account)
    await quoteToken.addWhitelist(contracts.ClearingHouse.address);

    console.log("addWhitelist ClearingHouse: vUST ", quoteToken.address);

    // addWhitelist(address account)
    await quoteToken.addWhitelist(pools[0].address);

    console.log("addWhitelist pools: vBTC ", quoteToken.address);

    // addWhitelist(address account)
    await quoteToken.addWhitelist(pools[1].address);

    console.log("addWhitelist pools: vETH ", quoteToken.address);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

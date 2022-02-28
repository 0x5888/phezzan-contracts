const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const quoteToken = await contractAt("QuoteToken", contracts.vUST.address);

    // addWhitelist(address account)
    await quoteToken.addWhitelist(contracts.ClearingHouse.address);

    console.log("addWhitelist ClearingHouse: vUST ", quoteToken.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

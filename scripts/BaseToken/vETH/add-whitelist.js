const hre = require("hardhat");
const { contractAt } = require("../../helpers")
const { contracts } = require("../../../metadata/rinkeby.json")

async function main() {

    const baseToken = await contractAt("BaseToken", contracts.vETH.address);

    // addWhitelist(address account)
    await baseToken.addWhitelist(contracts.ClearingHouse.address);

    console.log("addWhitelist ClearingHouse: vETH ", baseToken.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

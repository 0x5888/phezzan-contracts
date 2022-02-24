const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const exchange = await contractAt("Exchange", contracts.Exchange.address);

     // setClearingHouse
    const vETH = contracts.vETH.address;
    const maxTickCrossedWithinBlock = 500; 

    await exchange.setMaxTickCrossedWithinBlock(vETH, maxTickCrossedWithinBlock);
    console.log("Exchange vETH setMaxTickCrossedWithinBlock Done !", contracts.Exchange.address, "vETH:", vETH);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

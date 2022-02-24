const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const exchange = await contractAt("Exchange", contracts.Exchange.address);

     // setClearingHouse
    const vBTC = contracts.vBTC.address;
    const maxTickCrossedWithinBlock = 500; 

    await exchange.setMaxTickCrossedWithinBlock(vBTC, maxTickCrossedWithinBlock);
    console.log("Exchange vBTC setMaxTickCrossedWithinBlock Done !", contracts.Exchange.address, "vBTC:", vBTC);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

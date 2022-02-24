const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const exchange = await contractAt("Exchange", contracts.Exchange.address);

     // setAccountBalance
    const accountBalance = contracts.AccountBalance.address;
    await exchange.setAccountBalance(accountBalance);
    console.log("Exchange setAccountBalance Done !", contracts.Exchange.address, "Exchange:", accountBalance);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

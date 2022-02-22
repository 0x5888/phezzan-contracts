const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const accountBalance = await contractAt("AccountBalance", contracts.AccountBalance.address);

     // setClearingHouse
    const address = contracts.ClearingHouse.address;
    await accountBalance.setClearingHouse(address);
    console.log("accountBalance setClearingHouse Done !", contracts.AccountBalance.address, "ClearingHouse:", address);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

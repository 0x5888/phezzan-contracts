const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const vault = await contractAt("Vault", contracts.Vault.address);

     // setClearingHouse
    const address = contracts.ClearingHouse.address;
    await vault.setClearingHouse(address);
    console.log("vault setClearingHouse Done !", contracts.Vault.address, "ClearingHouse:", address);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

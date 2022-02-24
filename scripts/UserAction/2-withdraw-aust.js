const { ethers } = require("ethers");
const hre = require("hardhat");
const { contractAt } = require("../helpers");
const { externalContracts, contracts } = require("../../metadata/rinkeby.json");
const { sendTxn } = require("../helpers");


async function main() {


    const [owner] = await hre.ethers.getSigners();

    const vault = await contractAt("Vault", contracts.Vault.address);
    
    const aUstAddress = externalContracts.aUST
    const amountX10_D = 5000000   //5e6  5 aUST
    const account = owner.address;
    const message = `deposit:  ${amountX10_D} aUST, trader: ${account} `

    await sendTxn(vault.deposit(aUstAddress, amountX10_D), message)

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});



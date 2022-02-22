const { ethers } = require("ethers");
const hre = require("hardhat");
const AUST = require("../../abis/usdc.json") 
const { externalContracts, contracts } = require("../../metadata/rinkeby.json")
const { sendTxn } = require("../helpers")
const BigNumber = require('bignumber.js');


async function main() {


    const [owner] = await hre.ethers.getSigners();

    console.log(owner.address)

    const AUSTAddress = externalContracts.aUST

    const aust = new ethers.Contract(
        AUSTAddress,
        AUST,
        owner
    );
    const spender = contracts.Vault.address;
    const account = owner.address;
    const value = 1000000000000000   //1e15
    const message = `approve ${spender} , value ${value} `
    await sendTxn(aust.approve(spender, value), message)


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});



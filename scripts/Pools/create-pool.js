const hre = require("hardhat");
const { sendTxn } = require("../helpers")
const { contracts, externalContracts } = require("../../metadata/rinkeby.json")
const univ3factoryABI = require("../../abis/uniswapV3Factory.json")


async function main() {
    const [owner] = await hre.ethers.getSigners();

    const contractAddress = externalContracts.UniswapV3Factory 
    const abi = univ3factoryABI

    const uniswapV3Factory = new hre.ethers.Contract(contractAddress, abi, owner);

    const tokenA = contracts.vBTC.address;
    const tokenB = contracts.vUST.address;
    const fee = 3000;
    // address tokenA,
    // address tokenB,
    // uint24 fee
    const message = `create BTC pool: ${tokenA} - ${tokenB} , fee ${fee} `
    const result = await sendTxn(uniswapV3Factory.createPool(tokenA, tokenB, fee, { gasLimit: 25000000, gasPrice: 50000000000 }), message)
    console.log("uniswapV3Factory: ", result.to);


    const tokenA = contracts.vETH.address;

    const fee = 3000;
    // address tokenA,
    // address tokenB,
    // uint24 fee
    const message = `create ETH pool: ${tokenA} - ${tokenB} , fee ${fee} `
    const result = await sendTxn(uniswapV3Factory.createPool(tokenA, tokenB, fee, { gasLimit: 25000000, gasPrice: 50000000000 }), message)
    console.log("uniswapV3Factory: ", result.to);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

const hre = require("hardhat");
const { sendTxn } = require("../helpers")
const { contracts, pools } = require("../../metadata/rinkeby.json")
const uniswapV3PoolABI = require("../../abis/uniswapV3Pool.json")





async function main() {
    const [owner] = await hre.ethers.getSigners();
    // BTC  Pool
    const btcPoolAddress = pools[0].address 
    const abi = uniswapV3PoolABI
    const sqrtPriceX96 = hre.ethers.BigNumber.from("17010038887138563313944736668394") 

    const uniswapV3Pool = new hre.ethers.Contract(btcPoolAddress, abi, owner);

    
    const message = `init BTC pool `
    const result = await sendTxn(uniswapV3Pool.initialize(sqrtPriceX96), message)
    console.log("uniswapV3Pool BTC: ", result);

    // ETH Pool
    const ethPoolAddress = pools[1].address 
    const sqrtPriceX96_2 =  hre.ethers.BigNumber.from("4837841982334275262406027271815")  

    const uniswapV3Pool_2 = new hre.ethers.Contract(ethPoolAddress, abi, owner);

    
    const message_2 = `init ETH pool `
    const result_2 = await sendTxn(uniswapV3Pool_2.initialize(sqrtPriceX96_2), message_2)
    console.log("uniswapV3Pool ETH: ", result_2);


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

const { ethers } = require("ethers");
const hre = require("hardhat");
const { contractAt } = require("../helpers");
const { externalContracts, contracts } = require("../../metadata/rinkeby.json");
const { sendTxn } = require("../helpers");


async function main() {



    const [owner] = await hre.ethers.getSigners();

    const clearingHouse = await contractAt("ClearingHouse", contracts.ClearingHouse.address);
    
   
    // const params = {
    //     trader: "0xCeCce8Fec5CbcBBb8BDC6598Ee09b01e01D5ae58",
    //     baseToken: "0xE17FE2392612FF39b7782DabC7B16e14090524c7",
    //     isBaseToQuote: true,
    //     isExactInput: true,
    //     isClose: false,
        // amount: 2000000,
        // sqrtPriceLimitX96: 0,
    //     isLiquidation: false
    // }

    // address baseToken;
    // bool isBaseToQuote;
    // bool isExactInput;
    // uint256 amount;
    // uint256 oppositeAmountBound;
    // uint256 deadline;
    // uint160 sqrtPriceLimitX96;
    // bytes32 referralCode;

    const params = [
        "0xE17FE2392612FF39b7782DabC7B16e14090524c7",   // baseToken
        true,                                           // isBaseToQuote
        true,                                           // isExactInput
        2000000,                                        // amount
        0,                                              // oppositeAmountBound
        2645705244,                                     // deadline
        0,                                              // sqrtPriceLimitX96
        hre.ethers.utils.formatBytes32String("0"),                      // referralCode
    ]

    const message = `openPosition:  ${params}  address:  ${contracts.ClearingHouse.address} `

    await sendTxn(clearingHouse.openPosition(params), message)

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});



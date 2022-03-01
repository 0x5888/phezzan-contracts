// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts } = require("../../metadata/rinkeby.json")

async function main() {

    const marketRegistry = await contractAt("MarketRegistry", contracts.MarketRegistry.address);

    const baseToken = contracts.vETH.address 
    const insuranceFundFeeRatioArg =  100000
    // addPool(address baseToken, uint24 feeRatio) 
    await marketRegistry.setInsuranceFundFeeRatio(baseToken, insuranceFundFeeRatioArg);  // vETH

    console.log("MarketRegistry setInsuranceFundFeeRatio vETH Done !", marketRegistry.address);

    const baseToken_2 = contracts.vBTC.address 

    // addPool(address baseToken, uint24 feeRatio) 
    await marketRegistry.setInsuranceFundFeeRatio(baseToken_2, insuranceFundFeeRatioArg);  // vETH

    console.log("MarketRegistry setInsuranceFundFeeRatio vBTC Done !", marketRegistry.address);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { contractAt } = require("../helpers")
const { contracts, externalContracts } = require("../../metadata/rinkeby.json")

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

    // const insuranceFund = await contractAt("InsuranceFund", "0xd2177FfC4079A4912e0638a4b25Eb9547F376EDF");

    // await insuranceFund.initialize("0xeb8f08a975Ab53E34D8a0330E0D34de942C95926");  // USDC


    const insuranceFund = await contractAt("InsuranceFund", contracts.InsuranceFund.address);

    await insuranceFund.initialize(externalContracts.USDC);  // USDC

    console.log("InsuranceFund Init Done !", insuranceFund.address);


    


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

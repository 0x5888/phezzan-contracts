// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { contractAt } = require("../helpers")


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

    const baseToken = await contractAt("BaseToken", "0xbBbA9df971763B8d01356FBEa86De68B4541944F");

    await baseToken.initialize("vaUST", "vaUST", "0x4034A2B251F311F2CD334FACF3891A463d7F34AA");

    console.log("vaUST deployed to:", baseToken.address);


    


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

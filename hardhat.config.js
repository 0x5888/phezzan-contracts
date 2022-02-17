require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    hardhat: {
      defaultBalanceEther: 200,
      allowUnlimitedContractSize: true,
    },
    avaxtest: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: [PRIVATE_KEY],
      gas: 2100000000,
      gasPrice: 800000000000,
      allowUnlimitedContractSize: true,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
    },
  }
};

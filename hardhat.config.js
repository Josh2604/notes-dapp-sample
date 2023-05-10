require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const MUMBAI_URL= process.env.MUMBAI_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

// console.log("------")
// console.log("Mumbai url: ", MUMBAI_URL)
// console.log("------")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [MUMBAI_PRIVATE_KEY]
    }
  }
};

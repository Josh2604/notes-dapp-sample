require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const MUMBAI_URL = process.env.MUMBAI_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const FUJI_URL = process.env.FUJI_URL;
const FUJI_PRIVATE_KEY = process.env.FUJI_PRIVATE_KEY;
// console.log("------")
// console.log("Mumbai url: ", MUMBAI_URL)
// console.log("Fuji url: ", FUJI_URL)
// console.log("------")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
    fuji: {
      url: FUJI_URL,
      accounts: [FUJI_PRIVATE_KEY],
    }
  }
};

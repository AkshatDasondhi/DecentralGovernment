require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const {API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "ganache",
  networks: {
    hardhat: {},
    ganache: {
        url: "HTTP://0.0.0.0:7545",
        accounts: [`0x${PRIVATE_KEY}`],
        gas: 6721975,
        gasPrice: 20000000000
    }
},
};

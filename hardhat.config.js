require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
    networks: {
        base: {
              url: process.env.BASE_RPC_URL || "https://mainnet.base.org",
                    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
                          chainId: 8453, // Base Mainnet
                              },
                                  baseTestnet: {
                                        url: process.env.BASE_TESTNET_RPC_URL || "https://goerli.base.org",
                                              accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
                                                    chainId: 84531, // Base Goerli
                                                        },
                                                          },
                                                          };
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
    networks: {
        base: {
              url: "https://mainnet.base.org", // RPC URL untuk Base mainnet
                    accounts: ["YOUR_PRIVATE_KEY"] // Tambahkan private key wallet Anda nanti
                        }
                          }
                          };
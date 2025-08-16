# Base Summer Project

Deploy the **Counter smart contract** to Base Network using Hardhat.

---

## ⚡ Setup

1. Install dependencies:
```bash
npm install

2. Copy the environment file:



cp .env.example .env

Fill in your PRIVATE_KEY and RPC_URL for the network you want to use.


3. Compile contracts:



npx hardhat compile


---

🧪 Testing

Run unit tests with Hardhat:

npx hardhat test

Expected output: all tests passing.


---

🚀 Deployment

Deploy to Base Testnet:

npx hardhat run scripts/deploy.js --network baseTestnet

Deploy to Base Mainnet:

npx hardhat run scripts/deploy.js --network base

After deployment, the script will log:

Deploying account

Contract address



---

🔒 Security Notes

Never push your .env or private keys to GitHub.

Make sure you have sufficient ETH balance for deployment and transactions.

Keep track of contract addresses for frontend or integration.



---

📚 References

Hardhat Docs https://hardhat.org/getting-started/

Ethers.js Docs https://docs.ethers.org/

Base Network https://base.org/


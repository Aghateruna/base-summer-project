Base Summer Project

Deploy Counter contract to Base Mainnet using Hardhat.

## Setup
1. Install dependencies:
   ```bash
      npm install

      2. Copy .env.example → .env fill your PRIVATE_KEY & RPC URL


      3. Compile contract:

      npx hardhat compile


      4. Deploy:

      npx hardhat run scripts/deploy.js --network base



      Testing

      npx hardhat test
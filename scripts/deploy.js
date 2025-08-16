const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying with account:", deployer.address);

      const CounterFactory = await hre.ethers.getContractFactory("Counter");
        const counter = await CounterFactory.deploy();

          // Ethers v6:
            await counter.waitForDeployment();

              console.log("Counter deployed to:", await counter.getAddress());
              }

              main()
                .then(() => process.exit(0))
                  .catch((err) => {
                      console.error(err);
                          process.exit(1);
                            });
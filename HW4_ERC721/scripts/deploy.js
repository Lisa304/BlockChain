process.env.NODE_NO_WARNINGS = 'stream/web'; // 看能不能消除ExperimentalWarning: stream/web 
async function main() {
  const GoldenFish = await ethers.getContractFactory("GoldenFish")

  // Start deployment, returning a promise that resolves to a contract object
  const goldenFish = await GoldenFish.deploy()
  await goldenFish.deployed()
  console.log("Contract deployed to address:", goldenFish.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

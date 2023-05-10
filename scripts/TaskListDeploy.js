const hre = require("hardhat");

async function main() {
  const Notes = await hre.ethers.getContractFactory("TaskList");
  const note= await Notes.deploy()

  await note.deployed();

  console.log(`Notes dApp deployed on ${note.address}`)
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;

})
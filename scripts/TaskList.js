const hre = require("hardhat");
const abi = require("../artifacts/contracts/TaskList.sol/TaskList.json");

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const MUMBAI_URL = process.env.MUMBAI_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

const FUJI_URL = process.env.FUJI_URL;
const FUJI_PRIVATE_KEY = process.env.FUJI_PRIVATE_KEY;

async function main(){
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = abi.abi;

  // const provider = new hre.ethers.providers.EtherscanProvider("maticmum", process.env.MATIC_PRIVATE_KEY);
  const provider = new hre.ethers.providers.JsonRpcProvider(FUJI_URL);

  const signer = new hre.ethers.Wallet(FUJI_PRIVATE_KEY, provider);

  const taskList = new hre.ethers.Contract(contractAddress, contractABI, signer);

  // Nos permite agregar nuevas tareas
  // const description = hre.ethers.utils.formatBytes32String("Deploy de contrato en tesnet");
  // await taskList.addTask(description);

  // Permite marcar como terminada una tarea
  await taskList.completeTask(1);

  // Elimina una tarea
  //await taskList.deleteTask(1);


  const tasks = await taskList.getTaskCount();
  console.log(`Task number: ${tasks}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

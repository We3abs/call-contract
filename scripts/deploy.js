const hre = require("hardhat");



async function main() {
  
  const getContract = await hre.ethers.getContractFactory("CallContract");
  const contractDeployed = await getContract.deploy();

  console.log(
    `Contract was deployed to ${contractDeployed.address}`)
  const tx = await contractDeployed.callWinner(process.env.EXTERNAL_CONTRACT_ADDRESS);
  
console.log(tx)


//Contract was deployed to 0xb615b4f9DeF20A7A132466E4E6250F2B481dcDfa


  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

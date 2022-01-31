// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// For Hardhat 
const contract = require("../artifacts/contracts/SportsContract.sol/SportsContract.json");

// print for checking.
// console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const sportsContractContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    try {
        const balance = await sportsContractContract.getBalance();
        console.log("The balance is: " + balance);
        
        console.log("Withdrawing " + balance);
        const tx = await sportsContractContract.withdraw(100000000000000);
        await tx.wait();
        
        const new_balance = await sportsContractContract.getBalance();
        console.log("The new balance is: " + new_balance);
    } catch(err) {
        console.log(err);
    }
  }

  main();
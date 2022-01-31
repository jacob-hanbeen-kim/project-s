async function main() {
    const SportsContract = await ethers.getContractFactory("SportsContract");
 
    // Start deployment, returning a promise that resolves to a contract object
    const sports_contract = await SportsContract.deploy();   
    console.log("Contract deployed to address:", sports_contract.address);
 }
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

// Contract address 0xE80D0874c2A90582A02611BDC0Ea3893D3b1e2d8
// https://ropsten.etherscan.io/address/0xe80d0874c2a90582a02611bdc0ea3893d3b1e2d8
async function main() {
    const MockToken = await ethers.getContractFactory("MockToken");
 
    // Start deployment, returning a promise that resolves to a contract object
    const mocktoken = await MockToken.deploy();   
    console.log("Contract deployed to address:", mocktoken.address);
 }
 
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

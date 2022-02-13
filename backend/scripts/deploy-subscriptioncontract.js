async function main() {
  const Subscription = await ethers.getContractFactory("SubscriptionContract");

  // Start deployment, returning a promise that resolves to a contract object
  const subscription = await Subscription.deploy();
  console.log("Contract deployed to address:", subscription.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

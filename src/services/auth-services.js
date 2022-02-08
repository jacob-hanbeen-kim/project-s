
const detectProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
};

const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    if (accounts.length === 0) {
        console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
        setCurrentAccount(accounts[0]);
        window.localStorage.setItem('userAccount', accounts[0]);

        const accBalanceEth = web3.utils.fromWei(
            await web3.eth.getBalance(accounts[0]),
            "ether"
        );

        setBalance(Number(accBalanceEth).toFixed(6));
        setIsConnected(true);
    }
};


function signInWithMetaMask() {

    // Step 1: Request (limited) access to user's ethereum account
    const provider = detectProvider();
    if (!provider) {
        throw new Error('Please install MetaMask');
    }

    if (provider !== window.ethereum) {
        throw new Error("Not Ethereum Provider. Do you have multiple wallet installed?");
    }

    const ethereum = provider;

    await ethereum.request({
        method: "eth_requestAccounts",
    });
    // Step 2: Retrieve the current nonce for the requested address

    getNonceToSign({ address: ethereum.selectedAddress });


    // Step 3: Get the user to sign the nonce with their private key

    await ethereum.request({
        method: 'personal_sign',
        params: [
            `0x${this.toHex(response.nonce)}`,
            ethereum.selectedAddress
        ]
    })
    // Step 4: If the signature is valid, retrieve a custom auth token for Firebase

    verifySignedMessage({ address: ethereum.selectedAddress, signature: sig });

    // Step 5: Use the auth token to auth with Firebase

    await signInWithCustomToken(this.auth, response.token);
}
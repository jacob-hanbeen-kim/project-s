import Web3 from 'web3';

const CustomException = (message, code) => {
    const error = new Error(message);
    error.code = code;
    throw error;
}

function detectProvider() {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        throw CustomException('No Ethereum browser detected! Check out MetaMask');
    }

    if (!provider) {
        throw CustomException('Metamask Not Found. Please install Metamask');
    }

    if (provider !== window.ethereum) {
        throw CustomException('Not Ethereum Provider. Do you have multiple wallet installed?');
    }

    return provider;
};

class Web3Helper {

    provider;
    web3;

    constructor() {
        this.provider = detectProvider();
        this.web3 = new Web3(this.provider);

        console.log('web3 helper constructor');
    }

    async getAccounts() {
        const sig = await this.provider.request({
            method: "eth_requestAccounts",
        });
        const accounts = await this.web3.eth.getAccounts();
        console.log('get accounts', accounts);
        return accounts;
    }

    async sign(account, message) {
        // const signature = await this.provider.request({
        //     method: 'personal_sign',
        //     params: [
        //         message,
        //         account
        //     ]
        // })

        const signature = await this.web3.eth.personal.sign(message, account);
        console.log('sign', signature);
        return signature;
    }

    async ecRecover(dataThatWasSigned, signature) {
        const account = await this.web3.eth.personal.ecRecover(dataThatWasSigned, signature)
        return account;
    }
}

export const web3Helper = new Web3Helper()
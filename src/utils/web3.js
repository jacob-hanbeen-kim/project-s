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

    isInitialized() {
        try {
            if (!(this.provider && this.web3)) {
                this.provider = detectProvider();
                this.web3 = new Web3(this.provider);
            }
            return true;
        } catch (e) {
            window.alert(e);
            return false;
        }
    }

    async getAccounts() {
        if (!this.isInitialized()) return null;
        // request account access 
        await this.provider.request({
            method: "eth_requestAccounts",
        });

        const accounts = await this.web3.eth.getAccounts();
        console.log('get accounts', accounts);
        return accounts;
    }

    async sign(account, message) {
        if (!this.isInitialized()) return null;
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
        if (!this.isInitialized()) return null;

        const account = await this.web3.eth.personal.ecRecover(dataThatWasSigned, signature)
        return account;
    }
}

export const web3Helper = new Web3Helper()
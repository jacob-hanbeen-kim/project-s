/**
 * Flow
 * / ---- sponsor ---- /
 * 1. deploy contract --> contract address
 *    - sender address
 *    - receiver address
 *    - platform address
 *    - amount
 *    - commision %
 *    - abi
 * 2. getHash --> message
 *    - instance of contract
 *    - amount
 * 3. sign --> signature
 *    - sender address
 *    - message
 * 
 * / ---- sponsee ---- /
 * 1. close ---> event
 *    - receiver address
 *    - amount
 *    - signature
 */


import { web3Helper } from '../utils/web3';

const web3 = web3Helper.web3;

/**
 * ABI stands for Application Binary Interface.
 * Basically it's a representation of your contracts' methods in JSON format
 * that tells Web3.js how to format function calls in a way your contract will understand.
 */
const UniDirectionalPaymentChannel_ABI = require('./abi.json');

async function deploy(senderAddress, receiverAddress, commission, amount, platformAddress = '0x8E4124DD649198F41D1443D0253de7d4F7438648') {
    console.log('Attempting to deploy from account', senderAddress);

    // deploying our contract
    const result = await new web3.eth.Contract(UniDirectionalPaymentChannel_ABI.abi)
        .deploy({
            data: UniDirectionalPaymentChannel_ABI.bytecode,
            arguments: [
                receiverAddress,
                platformAddress,
                commission
            ]
        })
        .send({ from: senderAddress, value: web3.utils.toWei(amount) });

    console.log('Contract deployed to', result.options.address);
    this.contractAddress = result.options.address;


    return result.options.address;
};

class UniDirectionalPaymentChannel {

    // contract instance
    uniDirectionalPaymentChannel;
    // account address
    accountAddress;

    constructor(accountAddress, contractAddress) {
        this.accountAddress = accountAddress;
        this.uniDirectionalPaymentChannel = new web3.eth.Contract(UniDirectionalPaymentChannel_ABI.abi, contractAddress);
    }

    async getHash(amount) {
        const message = await this.uniDirectionalPaymentChannel.methods.getHash(web3.utils.toWei(amount)).call();
        return message;
    }

    async cancel() {
        const event = await this.uniDirectionalPaymentChannel.methods.cancel().send({ from: this.accountAddress });
        console.log(event);

        return event;
    }
}

async function close(contractAddress, accountAddress, amount, signature) {
    const uniDirectionalPaymentChannel = new web3.eth.Contract(UniDirectionalPaymentChannel_ABI.abi, contractAddress);

    const event = await uniDirectionalPaymentChannel.methods.close(web3.utils.toWei(amount), signature).send({ from: accountAddress });
    console.log(event);

    return event;
}


export const UniDirectionalPaymentChannel_Sender = {
    deploy,
    UniDirectionalPaymentChannel
}

export const UniDirectionalPaymentChannel_Receiver = {
    close
}
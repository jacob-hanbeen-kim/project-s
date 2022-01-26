// import Web3 from 'web3';

// class Web3Hanlder {
//     async loadWeb3() {
//         if (typeof web3 !== 'undefined') {
//             // console.log(web3.setProvider(window.ethereum));
//             App.web3Provider = web3.currentProvider
//             // App.web3Provider = await detectEthereumProvider();
//             web3 = new Web3(App.web3Provider)
//         } else {
//             window.alert("Please connect to Metamask.")
//         }
//         // Modern dapp browsers...
//         if (window.ethereum) {
//             window.web3 = new Web3(ethereum)
//             try {
//                 // Request account access if needed
//                 await ethereum.enable()
//                 // Acccounts now exposed
//                 web3.eth.sendTransaction({/* ... */ })
//             } catch (error) {
//                 // User denied account access...
//             }
//         }
//         // Legacy dapp browsers...
//         else if (window.web3) {
//             // App.web3Provider = await detectEthereumProvider();
//             App.web3Provider = web3.currentProvider
//             window.web3 = new Web3(App.web3Provider)
//             // Acccounts always exposed
//             web3.eth.sendTransaction({/* ... */ })
//         }
//         // Non-dapp browsers...
//         else {
//             console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
//         }
//     }

//     async loadAccount() {
//         App.account = web3.eth.accounts[0];
//         // App.account = (await window.ethereum.request({ method: 'eth_accounts' }))[0];
//         console.log(App.account);
//     }

// }

// export const web3Hanlder = new Web3Hanlder();
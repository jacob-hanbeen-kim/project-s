import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

import {
    LoginContainer,
    ContentContainer,
    ButtonContainer,
    WalletList,
    Wallet,
    WalletName,
    WalletLogo
} from './Login.styled';

const Login = ({ isConnected, onLogin }) => {
    const navigate = useNavigate();

    useEffect(() => {
        isConnected && navigate("/account");
    })

    const [isConnecting, setIsConnecting] = useState(false);
    const [selectedWallet, setWallet] = useState(null);

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

    const onLoginHandler = async (wallet) => {
        setIsConnecting(true);
        setWallet(wallet);

        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum) {
                console.error(
                    "Not window.ethereum provider. Do you have multiple wallet installed ?"
                );
            }
            setIsConnecting(true);
            await provider.request({
                method: "eth_requestAccounts",
            });

            setWallet(null);
            setIsConnecting(false);
        }
        onLogin(provider);
    };


    return (
        <LoginContainer>
            <ContentContainer>
                <h1>Connect your wallet</h1>
                <p>Connect to one of ethereum wallet providers or create a new one.</p>
            </ContentContainer>
            <ButtonContainer>
                <WalletList>
                    <li>
                        <Wallet onClick={() => onLoginHandler('metamask')}>
                            <WalletLogo>
                                <img src='images/login/metamask.png' />
                            </WalletLogo>
                            <WalletName>
                                MetaMask
                            </WalletName>
                            {
                                selectedWallet === 'metamask' &&
                                isConnecting &&
                                <Spinner />
                            }
                        </Wallet>
                    </li>
                    <li>
                        <Wallet onClick={() => onLoginHandler('coinbase')} disabled>
                            <WalletLogo>
                                <img src='images/login/coinbase.png' />
                            </WalletLogo>
                            <WalletName>
                                Coinbase
                            </WalletName>
                            {
                                selectedWallet === 'coinbase' &&
                                isConnecting &&
                                <Spinner />
                            }
                        </Wallet>
                    </li>
                    <li>
                        <Wallet onClick={() => onLoginHandler('formatic')} disabled>
                            <WalletLogo>
                                <img src='images/login/formatic.png' />
                            </WalletLogo>
                            <WalletName>
                                Formatic
                            </WalletName>
                            {
                                selectedWallet === 'formatic' &&
                                isConnecting &&
                                <Spinner />
                            }
                        </Wallet>
                    </li>
                </WalletList>
            </ButtonContainer>
        </LoginContainer>
    )
}

export default Login
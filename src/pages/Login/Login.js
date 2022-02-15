import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { useAuth } from "../../contexts/AuthContext"

import {
    LoginContainer,
    ContentContainer,
    ButtonContainer,
    WalletList,
    Wallet,
    WalletName,
    WalletLogo
} from './Login.styled';

const Login = ({ }) => {

    const { currentUser, login } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        currentUser && navigate("/account");
    })

    const [isConnecting, setIsConnecting] = useState(false);
    const [selectedWallet, setWallet] = useState(null);

    const onLoginHandler = async (wallet) => {
        setIsConnecting(true);
        setWallet(wallet);

        login();

        setWallet(null);
        setIsConnecting(false);
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
                        <Wallet disabled={isConnecting} onClick={() => onLoginHandler('metamask')}>
                            <WalletLogo>
                                <img src={process.env.PUBLIC_URL + '/images/login/metamask.png'} />
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
                                <img src={process.env.PUBLIC_URL + '/images/login/coinbase.png'} />
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
                                <img src={process.env.PUBLIC_URL + '/images/login/formatic.png'} />
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
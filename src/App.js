// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
// styles
import GlobalStyles from './styles/Global';
import styled from 'styled-components';
// componenets
import { Footer, Navbar } from './components/'
// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Brand from './pages/Brands/Brands';
import Agents from './pages/Agents/Agents';
import ErrorPage from './pages/ErrorPage/ErrorPage';
// web3
import Web3 from 'web3';
// import { web3Hanlder } from './Web3Handler';

const theme = {
  colors: {
    // primary: '#449DD1',
    primary: '#535DCA',
    dark: '#000',
    light: '#fff',
    hover: '#308EC5',
    header: '#EEF7FB',
    body: '#fff',
    footer: '#003333'
  },
  font: {
    family: 'Poppins',
    size: {

    }
  },
  border: {
    radius: '10px',
  },
  mobile: {
    size: '760px',
    sizeM: '1420px'
  },
  screen: {
    sizeS: '760px',
    sizeM: '1420px'
  }
}

const FlexWropper = styled.div`
  min-height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

function App() {

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

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

  const onLogout = () => {
    console.log('logging out');
    setIsConnected(false);
    setCurrentAccount(null);
    window.localStorage.removeItem('userAccount');
  };

  useEffect(() => {
    const account = window.localStorage.getItem('userAccount');
    if (account !== null) {
      setCurrentAccount(account);
      setIsConnected(true);
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <FlexWropper>
            <Navbar isConnected={isConnected} currentAccount={currentAccount} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login isConnected={isConnected} onLogin={onLogin} />} />
              <Route path="/brands" element={<Brand />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/corporates" />
              <Route path="/crowdfunding" />
              <Route path="/account" element={<Account currentAccount={currentAccount} onLogout={onLogout} />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </FlexWropper>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}


export default App;

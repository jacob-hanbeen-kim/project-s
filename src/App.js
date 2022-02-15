// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import { lightTheme, darkTheme } from './Theme';
import GlobalStyles from './styles/Global';
import styled from 'styled-components';

// componenets
import { Footer, Navbar, Sidebar } from './components/'
// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Account from './pages/Account/Account';
import Brand from './pages/Brands/Brands';
import Agents from './pages/Agents/Agents';
import Membership from './pages/Membership/Membership';
import EditProfile from './pages/Profile/EditProfile';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Settings from './pages/Account/Settings/Settings';
// web3
import Web3 from 'web3';

function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => { theme === "light" ? setTheme("dark") : setTheme("light") }

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const onSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  }

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router basename={'/project-s'}>
          <FlexWropper>
            <Navbar isConnected={isConnected} onLogout={onLogout} isSidebarOpen={isSidebarOpen} onSidebarToggle={onSidebarToggle} theme={theme} toggleTheme={toggleTheme} />
            {
              isSidebarOpen && <Sidebar onSidebarToggle={onSidebarToggle} isConnected={isConnected} onLogout={onLogout} />
            }
            <PageWrapper isSidebarOpen={isSidebarOpen} >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login isConnected={isConnected} onLogin={onLogin} />} />
                <Route path="/brands" element={<Brand />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/account" element={<Account currentAccount={currentAccount} />} />
                <Route path="/account/:username" element={<Account currentAccount={currentAccount} />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/account/edit" element={<EditProfile />} />
                <Route path="/account/settings" element={<Settings currentAccount={currentAccount} userType={"sponsee"} />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </PageWrapper>
          </FlexWropper>
        </Router>
        {!isSidebarOpen && <Footer isDark={theme === 'dark'} />}
      </>
    </ThemeProvider>
  );
}

const PageWrapper = styled.div`
  display: ${({ isSidebarOpen }) => isSidebarOpen ? 'none' : 'block'};
`

const FlexWropper = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`

export default App;

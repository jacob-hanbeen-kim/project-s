// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import { lightTheme, darkTheme } from './themes/Theme';
import GlobalStyles from './styles/Global';
import styled from 'styled-components';

// componenets
import { Footer, Navbar, Sidebar } from './components/'

// pages
import Waitlist from './pages/Waitlist/Waitlist';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Explore from './pages/Explore/Explore';
import Account from './pages/Account/Account';
import Brand from './pages/Brands/Brands';
import Agents from './pages/Agents/Agents';
import Membership from './pages/Membership/Membership';
import EditProfile from './pages/Profile/EditProfile';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AuthProvider } from './contexts/AuthContext';

// const accBalanceEth = web3.utils.fromWei(
//   await web3.eth.getBalance(accounts[0]),
//   "ether"
// );

// setBalance(Number(accBalanceEth).toFixed(6));

function App() {

  console.log(process.env.PUBLIC_URL)

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => { theme === "light" ? setTheme("dark") : setTheme("light") }

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const onSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router basename={process.env.PUBLIC_URL}>
          <AuthProvider>
            <FlexWropper>
              <Navbar isSidebarOpen={isSidebarOpen} onSidebarToggle={onSidebarToggle} theme={theme} toggleTheme={toggleTheme} />
              {
                isSidebarOpen && <Sidebar onSidebarToggle={onSidebarToggle} />
              }
              <PageWrapper isSidebarOpen={isSidebarOpen} >
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/" element={<Waitlist />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/account/:username" element={<Account />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/account/edit" element={<EditProfile />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </PageWrapper>
            </FlexWropper>
          </AuthProvider>
        </Router >
        {!isSidebarOpen && <Footer isDark={theme === 'dark'} />
        }
      </>
    </ThemeProvider >
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

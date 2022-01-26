// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
// styles
import GlobalStyles from './styles/Global';
import styled from 'styled-components';
// componenets
import { Footer, Navbar } from './components/'
// pages
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import Brand from './pages/Brands/Brands';
import Agents from './pages/Agents/Agents';

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
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <FlexWropper>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brands" element={<Brand />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/corporates" />
              <Route path="/crowdfunding" />
              <Route path="/account" element={<Account />} />
            </Routes>
          </FlexWropper>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

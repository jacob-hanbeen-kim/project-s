// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
// styles
import GlobalStyles from './styles/Global';
import styled from 'styled-components';
// componenets
import Navbar from './components/Navbar'
import Footer from './components/Footer';
// pages
import Home from './pages/Home/Home';

const theme = {
  colors: {
    primary: '#449DD1',
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
              <Route path="/brands" />
              <Route path="/agents" />
              <Route path="/corporates" />
              <Route path="/crowdfunding" />
              <Route path="/account" />
            </Routes>
          </FlexWropper>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
// styles
import GlobalStyles from './styles/Global';
// componenets
import Navbar from './components/Navbar'
import Footer from './components/Footer';
// pages
import Home from './pages/Home';

const theme = {
  colors: {
    primary: '#449DD1',
    header: '#EEF7FB',
    body: '#fff',
    footer: '#003333'
  },
  font: {
    family: 'Poppins',
    size: {

    }
  },
  mobile: {
    size: '760px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" />
            <Route path="/agents" />
            <Route path="/corporates" />
            <Route path="/crowdfunding" />
          </Routes>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { Header, Navbar } from './components'
import Footer from './components/Footer';
import { Container } from './styles/Container.styled'
import GlobalStyles from './styles/Global';
import content from './content';
import Card from './components/Card'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: {
    size: '760px'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <Router>
        <Navbar />
      </Router>*/}
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

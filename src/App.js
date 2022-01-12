import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Header, Navbar } from './components'


function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Header title="Project S" />
    </>
  );
}

export default App;

import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <header>
        <NavigationBar />
      </header>
      <Container>
        <main className='py-3'>
          <div className='text-center'>all other screens</div>
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App

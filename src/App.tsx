import Navibar from './components/Navibar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <Router>
      <Navibar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />}/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App

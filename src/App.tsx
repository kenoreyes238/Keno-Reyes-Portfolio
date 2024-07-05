import Navibar from './components/Navibar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <Router>
      <Navibar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App

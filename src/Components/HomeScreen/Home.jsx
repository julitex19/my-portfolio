import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Intro from '../Intro/Intro'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      
      <Router>
      
      <Nav />

      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    <Footer/>
    </Router>
    </>
   
  )
}

export default Home

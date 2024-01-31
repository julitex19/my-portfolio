// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '../Nav/Nav'
import Intro from '../Intro/Intro'
import About from '../About/About'
import Services from '../Services/Services'
import Skills from '../Skills/Skills'
import Team from '../Team/Team'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer';
import { useRef } from 'react'

function Home() {
  const Introref = useRef(null);
  const Aboutref = useRef(null);
  const Skillsref = useRef(null);
  const Servicesref  = useRef(null);
  const Teamsref = useRef(null);
  const Contactref = useRef(null);



  const scrollToSection = (ref) => {
    // Scroll to the specified section
    console.log(ref)
    ref && ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      
      {/* <Nav scrollToSection={ scrollToSection} /> */}
      <div className='bg-primaryColor justify-between px-36 py-5 hidden lg:flex fixed w-full top-0 z-50'>
                
                <span className='text-white font-secondaryFont font-bold text-3xl'>
                    Portfo<span className='text-black'>lio.</span>
                </span>
               
                <ul className=' gap-6 hidden lg:flex'>
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={() => scrollToSection(Introref)}>Intro</li>
                    
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={() => scrollToSection(Aboutref)}>About</li>
                   
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={() => scrollToSection(Servicesref)}>Services</li>
                   
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer"  onClick={() => scrollToSection(Skillsref)}> Skills </li>
                    
                    
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={() =>scrollToSection(Teamsref)}> Teams</li>
                        
                        <li className="text-white hover:underline hover:text-lg font-medium cursor-pointer" onClick={()=> scrollToSection(Contactref)}>Contact</li>
                  
                </ul>

            </div>
      
      <div ref={Introref} id="Intro"><Intro /></div>
      <div ref={Aboutref} id="About"> <About /></div>
      <div ref={Servicesref} id="Services"> <Services /></div>
      <div ref={Skillsref} id="Skills"> <Skills /></div>
      <div ref={Teamsref} id="Teams"><Team /></div>
      <div ref={Contactref} id="Contact"><Contact /></div>
     
      <Footer/>
      
      {/* <Router>
      
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
    </Router> */}
    </>
   
  )
}

export default Home

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About'


const App = () => {
  
    return (
      <Router>
        <div className='App'>
        <Navbar/>
        </div>
          <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
          </Routes>
          
          <Footer />
          
          
          
        
        
        
        
        
      </Router>
      
    );


}

export default App;

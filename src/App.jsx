import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  let navBarId = '';
  if (location.pathname === '/') {
    navBarId = 'first-navbar'; // Home Navbar 
  } else {
    navBarId = 'second-navbar'; // about & Contact Navbar
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset:0,
      distance: '50px',
      once: false,
      mirror: true
    });
  }, []);

  return (
    <>
      <NavBar id={navBarId}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App

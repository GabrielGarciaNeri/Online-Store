import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Catalog from './pages/catalog'

// load bootstrap and icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from './pages/about';
import Admin from './pages/admin';

import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      
      
      
      <Footer />
    </BrowserRouter>
  )
}

export default App

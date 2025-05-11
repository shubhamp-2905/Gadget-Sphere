import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import 'animate.css';
import Hero from './Components/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Products from './Components/Products';
import New from './Components/New';
// import Register from './Components/register';

function App() {
  return (
    <>
    
 <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/products' element={<Products/>}/>
    </Routes>
   <Footer/>
 </BrowserRouter>

</>
  )
}

export default App;

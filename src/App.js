
import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';

// import ScrollToTop from './components/ScrollToTop';


function App(){
  return(
   <Router>
    <GlobalStyle/>
    <Navbar/>
      <Routes>
      <Route path='/'   element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      
      </Routes>
      <Footer/>
   </Router>


  );
}

export default App;

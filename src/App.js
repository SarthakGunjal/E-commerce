import React from "react";
// import Home from "./components/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Mobile from "./components/Middle/Mobiles/Mobilee";
import Login from "./components/Navbar/Login";
import Home from "./components/Home"
import Cart from "./components/Navbar/Cart"
import About from "./components/Navbar/About"
import Laptop from "./components/Middle/Laptop/Laptop"


function App() {
  return (
    <>
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/mobile" element={<Mobile/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Laptop" element={<Laptop/>} />
          
        </Routes>
      </BrowserRouter>
    </>
   
    
   
    
    
    
    </>
  );
}

export default App;

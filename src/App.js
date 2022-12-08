import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./style.css"
import Home from "./pages/home/home";
import Services from "./pages/services";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import About from "./pages/portfolio";

const App = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route element = { <Home/> }  path="/" exact />
           <Route element = { <Services/> }  path="/services" />
           {/* <Route element = { Portfolio }  path="/portfolio" />
           <Route element = { Contact }  path="/contact" />
           <Route element = { About }  path="/about" /> */}
        </Routes>
       </BrowserRouter>
   )
}

export default App;
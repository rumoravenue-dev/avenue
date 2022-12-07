import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services/services";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import About from "./pages/portfolio";

const App = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Home /> }  path="/" />
                <Route element = { <Services /> }  path="/services" />
                {/* <Route component = { Portfolio }  path="/portfolio" />
                <Route component = { Contact }  path="/contact" />
                <Route component = { About }  path="/about" /> */}
           </Routes>
       </BrowserRouter>
   )
}

export default App;
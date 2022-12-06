import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import About from "./pages/portfolio";

const App = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Services }  path="/services" />
           {/* <Route component = { Portfolio }  path="/portfolio" />
           <Route component = { Contact }  path="/contact" />
           <Route component = { About }  path="/about" /> */}
       </BrowserRouter>
   )
}

export default App;
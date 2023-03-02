import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import "./style.css"
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Tmrw from "./pages/portfolio/tmrw/tmrw";
import Pelicargo from "./pages/portfolio/pelicargo/pelicargo";
import About from "./pages/about/about";
import StartANewProject from "./pages/startANewProject/startANewProject";
import ReactGA from 'react-ga';

ReactGA.initialize('G-Y824M0N6NS');
ReactGA.pageview(window.location.pathname + window.location.search);

const GA = () => {
    const location = useLocation()
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [location])

    return null
}

const App = () => {
    return (
        <BrowserRouter>
            <GA />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Services />} path="/services" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Portfolio />} path="/portfolio" />
                <Route element={<Tmrw />} path="/portfolio/tmrw" />
                <Route element={<Pelicargo />} path="/portfolio/pelicargo" />
                <Route element={<About />} path="/about" />
                <Route element={<StartANewProject />} path="/newproject" />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

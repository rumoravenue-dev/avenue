import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import "./style.css"
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Pelicargo from "./pages/portfolio/pelicargo/pelicargo";
import Room from "./pages/portfolio/room/room";
import LilDan from "./pages/portfolio/lildan/lildan";
import Werx from "./pages/portfolio/werx/werx";
import Tmrw from "./pages/portfolio/tmrw/tmrw";
import Riboli from "./pages/portfolio/riboli/riboli";
import Omit from "./pages/portfolio/omit/omit";
import Marriott from "./pages/portfolio/marriott/marriott";
import Gaylord from "./pages/portfolio/gaylord/gaylord";
import Hennessy from "./pages/portfolio/hennessy/hennessy";
import Stage from "./pages/portfolio/stage/stage";
import NewEnglandWhalers from "./pages/portfolio/newenglandwhalers/newenglandwhalers";
import About from "./pages/about/about";
import StartANewProject from "./pages/startANewProject/startANewProject";
import TagManager from 'react-gtm-module';

TagManager.initialize({
    gtmId: 'GTM-P57ZMVQ'
})

/*
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
*/

const App = () => {
    return (
        <BrowserRouter>
            {/* <GA /> */ }
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Services />} path="/services" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Portfolio />} path="/portfolio" />
                <Route element={<Pelicargo />} path="/portfolio/pelicargo" />
                <Route element={<Room />} path="/portfolio/room" />
                <Route element={<LilDan />} path="/portfolio/lildan" />
                <Route element={<Werx />} path="/portfolio/werx" />
                <Route element={<Tmrw />} path="/portfolio/tmrw" />
                <Route element={<Riboli />} path="/portfolio/riboli" />
                <Route element={<Omit />} path="/portfolio/omit" />
                <Route element={<Marriott />} path="/portfolio/marriott-ancillary" />
                <Route element={<Gaylord />} path="/portfolio/gaylord" />
                <Route element={<Hennessy />} path="/portfolio/hennessy" />
                <Route element={<Stage />} path="/portfolio/stage-leap" />
                <Route element={<NewEnglandWhalers />} path="/portfolio/new-england-whalers" />
                <Route element={<About />} path="/about" />
                <Route element={<StartANewProject />} path="/newproject" />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

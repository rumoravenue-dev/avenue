import React, { useEffect, useState } from "react";
import HeaderSidebar from './headerSidebar'
import './styles/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

const Header = (props) => {

    const [openSidebar, setOpenSidebar] = useState(false);

    const toShowSidebar = () => setOpenSidebar(!openSidebar);

    return (
        <>
            <div className={props.contact ? "headerBlack": "header"}>
                <div className="row">
                    <div className="col-12 col-sm-2 col-md-3 col-lg-2 col-xl-4 headerImage">
                        <img src="/assets/img/header/Vector(1).svg" alt="logo header" />
                    </div>
                    <div className="col-12 col-sm-10 col-md-9 col-lg-10 col-xl-8 headerLinks" style={{color: props.contact ? "#000" : "#fff"}}>
                        <a href="/">Home</a>
                        <a href='/services'>Services</a>
                        <a href='/portfolio'>Portfolio</a>
                        <a href='/about'>About Us</a>
                        <button>
                            <a href="/contact">START YOUR PROJECT</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="wrap" onClick={toShowSidebar}>
               <MenuIcon fontSize="large" sx={{ color: props.contact ? "primary" : grey[50]}}/>
            </div>

            <div className={openSidebar ? 'showSidebar' : 'hiddenSidebar'} >
                <HeaderSidebar />
            </div>
        </>
    );
}

export default Header;
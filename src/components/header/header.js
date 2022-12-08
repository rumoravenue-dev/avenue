import React from "react";

import './style.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="row">
                    <div className="col-12 col-sm-4 headerImage">
                        <img src="/assets/img/header/Vector(1).svg" alt="logo header" />
                    </div>
                    <div className="col-12 col-sm-8 headerLinks">
                        <a>Home</a>
                        <a>Services</a>
                        <a>Portfolio</a>
                        <a>About Us</a>
                        <button>START YOUR PROJECT</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
import React from 'react';

import "./style.css";

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='row'>
                    <div className='col-12 col-sm-4 footerCopy'>
                        <button>Start a new Project</button>
                        <p>5pm CopyrIGHT All rights reserved.</p>
                    </div>
                    <div className='col-12 col-sm-4 footerLinks'>
                        <a href="/">Home</a>
                        <a href="/">Services</a>
                        <a href="/">Portfolio</a>
                        <a href="/">About US</a>
                    </div>
                    <div className='col-12 col-sm-4 footerMedia'>
                        <div className='socialMedia'>
                            <img src="/assets/img/footer/dribbble-logo.webp" alt="dribble"/>
                            <img src="/assets/img/footer/facebook-logo.webp" alt="facebook"/>
                            <img src="/assets/img/footer/instagram-logo.webp" alt="instagram"/>
                            <img src="/assets/img/footer/Tiktok.webp" alt="tiktok"/>
                        </div>
                        <div className='backToTop'>
                            <p>Back to top</p>
                            <img src="/assets/img/footer/Frame 139.webp" alt="toTop"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
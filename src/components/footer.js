import React from 'react';

import "./styles/footer.css";

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='row footerRow'>
                    <div className='col-12 col-sm-6 col-md-4 footerCopy'>
                        <button><a href='/contact'>Start a new Project</a></button>
                        <p>5pm CopyrIGHT All rights reserved.</p>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 footerLinks'>
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/about">About US</a>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 footerMedia'>
                        <div className='socialMedia'>
                            <a href='https://www.facebook.com/itsonly5pm'><img src="/assets/img/footer/facebook-logo.webp" alt="facebook"/></a>
                            <a href='/'><img src="/assets/img/footer/linkedin.svg" alt="linkedin" /></a>
                            <a href='https://www.instagram.com/itsonlyfivepm/'><img src="/assets/img/footer/instagram-logo.webp" alt="instagram"/></a>
                            <a href='https://www.tiktok.com/@itsonly5pm'><img src="/assets/img/footer/Tiktok.webp" alt="tiktok"/></a>
                        </div>
                        <div className='backToTop'>
                            <p>Back to top</p>
                            <a href='/#homeMain'>
                                <img src="/assets/img/footer/Frame 139.webp" alt="toTop"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
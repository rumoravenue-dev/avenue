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
                            <div className='row'>
                                <div className='col-3 col-sm-3 col-md-3 col-xl-3 col-lg-3'>
                                    <a href='https://www.facebook.com/itsonly5pm' target="_blank"><img src="/assets/img/footer/facebook-logo.webp" alt="facebook"/></a>
                                </div>
                                <div className='col-3 col-sm-3 col-md-3 col-xl-3 col-lg-3'>
                                    <a href='https://www.linkedin.com/company/onlyfivepm/about/?viewAsMember=true'  target="_blank"><img src="/assets/img/footer/linkedin.svg" alt="linkedin" /></a>
                                </div>
                                <div className='col-3 col-sm-3 col-md-3 col-xl-3 col-lg-3'>
                                    <a href='https://www.instagram.com/itsonlyfivepm/' target="_blank"><img src="/assets/img/footer/instagram-logo.webp" alt="instagram"/></a>
                                </div>
                                <div className='col-3 col-sm-3 col-md-3 col-xl-3 col-lg-3'>
                                    <a href='https://www.tiktok.com/@itsonly5pm' target="_blank"><img src="/assets/img/footer/Tiktok.webp" alt="tiktok"/></a>
                                </div>
                            </div>
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

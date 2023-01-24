import React from 'react';

import "./styles/footer.css";

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='container-wide'>
                    <div className='row footerRow'>
                        <div className='col-12 col-sm-6 col-md-4 footerCopy'>
                            <button><a href='/newproject'>Start a new Project</a></button>
                            <p>FIVEPM COPYRIGHT ALL RIGHTS RESERVED.</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 footerLinks'>
                            <a href="/">Home</a>
                            <a href="/services">Services</a>
                            <a href="/portfolio">Portfolio</a>
                            <a href="/about">About US</a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 footerMedia'>
                            <div className='socialMedia'>
                                <a href='https://www.linkedin.com/company/onlyfivepm/about/?viewAsMember=true'  target="_blank">Linkedin</a>
                                <a href='https://www.instagram.com/itsonlyfivepm/' target="_blank">Instagram</a>
                                <a href='https://www.tiktok.com/@itsonly5pm' target="_blank">Tiktok</a>
                                <a href='https://www.facebook.com/itsonly5pm' target="_blank">Facebook</a>
                            </div>
                            <div className='backToTop'>
                                <p>Back to top</p>
                                <a href='/#homeMain'>
                                    <img src="/assets/img/footer/Frame 139.webp" alt="toTop"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;

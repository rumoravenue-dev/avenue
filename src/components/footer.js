import React from 'react';

import "./styles/footer.css";

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='container-wide'>
                    <div className='row footerRow justify-content-between'>
                        <div className='col-12 col-md-12 col-xl-4 col-xxl-4 footerCopy'>
                            <p className='mt-4 lead mb-4'>We strategically partner with agencies, corporations, and startups that need pixel perfect presentation design to visually communicate with their teams, clients, shareholders, and/or consumers.</p>
                            <button className='newProject'><a href='/newproject'>Start a new Project</a></button>
                            <p className='mt-5 d-none d-xl-block'>FIVEPM COPYRIGHT ALL RIGHTS RESERVED.</p>
                        </div>
                        <div className='col-12 col-md-12 col-xl-6 col-xxl-4'>
                            <div className='row'>
                                <div className='col-6 col-md-6 footerLinks'>
                                    <a href="/">Home</a>
                                    <a href="/services">Services</a>
                                    <a href="/portfolio">Portfolio</a>
                                    <a href="/about">About US</a>
                                </div>
                                <div className='col-6 col-md-6 footerLinks'>
                                    <a href='https://www.linkedin.com/company/onlyfivepm/about/?viewAsMember=true'  target="_blank">Linkedin</a>
                                    <a href='https://www.instagram.com/onlyfivepm/' target="_blank">Instagram</a>
                                    <a href='https://www.tiktok.com/@itsonly5pm' target="_blank">Tiktok</a>
                                    <a href='https://www.facebook.com/itsonly5pm' target="_blank">Facebook</a>
                                </div>
                                {/*
                                <div className='col-12 col-md-4'>
                                    <div className='backToTop'>
                                        <p>Back to top</p>
                                        <a href='/#homeMain'>
                                            <img src="/assets/img/footer/back-to-top.svg" alt="toTop"/>
                                        </a>
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>
                        <div className='footerCopy text-center mt-5 d-block d-xl-none'>
                            <p>FIVEPM COPYRIGHT ALL RIGHTS RESERVED.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;

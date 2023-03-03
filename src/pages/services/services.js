import LazyLoad from 'react-lazy-load';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.css'
import { Helmet } from 'react-helmet';
import Header from '../../components/header'
import Presentation from '../../components/presentation'
import OurServices from '../../components/ourservices'
import GetInContat from '../../components/getInContact'
import Footer from '../../components/footer'
import { useEffect, useState } from 'react'
import CarouselWords from '../../components/carouselWords';
import Spacer from '../../components/spacer';

const Services = () => {
    const [changeText, setChangeText] = useState("GOOD TO")
    useEffect(() => {
        setInterval(() => {
            if (changeText == "GOOD TO") {
                setChangeText("WHAT TO")
            } else if (changeText == "WHAT TO") {
                setChangeText("YOU SHOULD")
            } else if (changeText == "YOU SHOULD") {
                setChangeText("GOOD TO")
            }
        }, 2000);
    }, [changeText])
    return (
        <>
            <Helmet>
                <title> Services - Only fivepm </title>
            </Helmet>
            <Header />
            <section className="homeMain mini" id="homeMain">
                <div className="container-wide">
                <div className="max-content wider">
                    <h1 className="the-title">Powerful Presentations That <span>Educate</span>, <span>Inspire</span>, and <span>Influence Action</span>.</h1>
                    {/* <p>5pm is your outsourced in-house presentation team</p> */}
                </div>
                </div>
            </section>
            <section className='aproachServices container-fluid'>
                <div className="container-wide">
                    <Spacer height={100} />
                    <div className='row rowAproach justify-content-between'>
                        <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-5'>
                            <div className='firstColAproach'>
                                <h3 className='lead text-white'>At fivepm, we believe that every presentation has the power to inspire action and drive meaningful change. That’s why we follow a simple, yet effective approach to create presentations that educate, engage and influence your audience.</h3>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4 col-md-5'>
                            <div className='secondColAproach'>
                                <LazyLoad threshold={1}>
                                    <img className='imgModelAproach' src="/assets/img/services/inspire.webp" alt="model image" />
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                    <Spacer height={100} />
                </div>
            </section>
            <section className='processServices container-wide'>
                <Spacer height={100} />
                <div className='row'>
                    <div className='col-12'>
                        <div className='firstColProcess'>
                            <h2> OUR PROCESS </h2>
                        </div>
                    </div>
                    <div className='col-12 secondColProcess topProcess'>
                        <div className='row'>
                            <div className="col-12 col-md-4">
                                <h3>Discover</h3>
                                <p>Our team works with you to understand your goals, audience, and context, and develops a compelling story that engages your audience and 
encourages them to think.</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h3>Design</h3>
                                <p>Our designers use clean and beautiful designs to bring your story to 
life and captivate your audience, while incorporating your feedback to 
meet your expectations and deliver the desired results.</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <h3>Deliver</h3>
                                <p>Finally, we collect and prepare all project files carefully to ensure easy 
future use, providing everything you need to make your presentation a 
success.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Spacer height={150} />
            </section>
            {/*
            <div className='container-carousel'>
                <div className="container-wide">
                    <div className='goodToKnowText'>
                        <div className='goodknowcarousel'><CarouselWords /></div>
                        <h2> know </h2>
                    </div>
                </div>
            </div>
            {/* <Presentation /> */ }
            <OurServices />
            <section className='addonsServices container-fluid'>
                <div className='container-wide'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                            <h2 className='pb-2 mb-4'> ADD-ONS </h2>
                            <div className='mb-5'><h4 className='pb-5 text-white'>Upgrade your presentation with our premium add-ons to take your project to the next level.</h4></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4 firstColIconsAddons'>
                            <img className='addonsServicesIMG' src='/assets/img/services/animations.svg' alt="icon animations" />
                            <h3> Animations </h3>
                        </div>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4'>
                            <img className='addonsServicesIMG' src='/assets/img/services/infographics.svg' alt="icon complex infographics" />
                            <h3 className='complexInfoAddon'> Complex Infographics </h3>
                        </div>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4'>
                            <img className='addonsServicesIMG' src='/assets/img/services/asset.svg' alt="icon asset sourcing" />
                            <h3> Asset Sourcing</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4'>
                            <img className='addonsServicesIMG' src='/assets/img/services/editing.svg' alt="icon photo editing" />
                            <h3> Photo Editing </h3>
                        </div>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4'>
                            <img className='addonsServicesIMG' src='/assets/img/services/timeblock.svg' alt="icon time block off" />
                            <h3> Time Blocking</h3>
                        </div>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4'>
                            <img className='addonsServicesIMG' src='/assets/img/services/rush.svg' alt="icon rush" />
                            <h3> Rush <br /></h3>
                        </div>
                    </div>
                </div>
            </section>
            <GetInContat />
            <Footer />
        </>
    )
}
export default Services;


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
                <title> Services - OnlyFivePM </title>
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
                                <h3 className='lead text-white'>At Five PM, we believe that every presentation has the power to inspire action and drive meaningful change. That’s why we follow a simple, yet effective approach to create presentations that educate, engage and influence your audience.</h3>
                            </div>
                        </div>
                        <div className='col-12 col-sm-4 col-md-5'>
                            <div className='secondColAproach'>
                                <LazyLoad threshold={1}>
                                    <img className='imgModelAproach' src="/assets/img/services/model.webp" alt="model image" />
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
                            <p> No need to overcomplicate it. We’re here to create phenomenal designs customized for you. </p>
                        </div>
                    </div>
                    <div className='col-6 secondColProcess topProcess'>
                        <h3> 1. Discovery </h3>
                        <p> We work with you to understand your goals, ask better questions, identify your audience, and build context. </p>
                        <h3> 3. DESIGN </h3>
                        <p> We leverage design to tell your story better. We’ll get people staring — and thinking. Clean, beautiful designs that help your narrative flow. </p>
                        <h3> 5. DELIVERY </h3>
                        <p> Finally, we will carefully collect and prepare all project files to ensure smooth and easy use in the future. </p>
                    </div>
                    <div className='col-6 thirdColProcess topProcess'>
                        <h3> 2. Storytelling </h3>
                        <p> We will develop a foundation of the deck. We’re going to tell a story — build tone, voice, and a foundational structure that will get people thinking. </p>
                        <h3> 4. FEEDBACK </h3>
                        <p> After each phase wraps up, we’ll present our work to collect and implement your feedback if such appears. </p>
                    </div>
                </div>
                <Spacer height={150} />
            </section>
            <div className='container-carousel'>
                <div className="container-wide">
                    <div className='goodToKnowText'>
                        <div className='goodknowcarousel'><CarouselWords /></div>
                        <h2> know </h2>
                    </div>
                </div>
            </div>
            <Presentation />
            <OurServices />
            <section className='addonsServices container-fluid'>
                <div className='container-wide'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                            <h2> ADD-ONS </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3 firstColIconsAddons'>
                            <img className='addonsServicesIMG' src='/assets/img/services/animations.svg' alt="icon animations" />
                            <h3> Animations </h3>
                        </div>
                        <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                            <img className='addonsServicesIMG' src='/assets/img/services/infographics.svg' alt="icon complex infographics" />
                            <h3 className='complexInfoAddon'> Complex Infographics </h3>
                        </div>
                        <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                            <img className='addonsServicesIMG' src='/assets/img/services/asset.svg' alt="icon asset sourcing" />
                            <h3> Asset Sourcing <br /> <span> Based on asset </span> </h3>
                        </div>
                        <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                            <img className='addonsServicesIMG' src='/assets/img/services/editing.svg' alt="icon photo editing" />
                            <h3> Photo Editing </h3>
                        </div>
                    </div>
                    <div className='row secondRowAddons'>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-3'>
                            <img className='addonsServicesIMG' src='/assets/img/services/custom.svg' alt="icon custom" />
                            <h3> Custom <br /> <span> White Glove Service </span> </h3>
                        </div>
                        <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-3'>
                            <img className='addonsServicesIMG' src='/assets/img/services/timeblock.svg' alt="icon time block off" />
                            <h3> Time Block off <br /> <span> hourly </span> </h3>
                        </div>
                        <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-3'>
                            <img className='addonsServicesIMG' src='/assets/img/services/rush.svg' alt="icon rush" />
                            <h3> Rush <br /> <span> +fee </span> </h3>
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


import style from './style.css'
import OurServices from '../../components/ourservices.js'

const Services = () => {
    return (
        <>
            <section className="mainServices container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 mainServicesText">
                        <h1> We create eye-catching & eye-opening presentations that <span> educate </span>, <span> inspire </span> and <span> influence action </span> </h1>
                    </div>
                </div>
            </section>

            <section className='aproachServices container-fluid'>
                <div className='row rowAproach'>
                    <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-12'>
                        <h2> We do this by following a simple approach: </h2>
                        <h3> <a> SETTING A GOAL </a> </h3>
                        <h3> <a> IDENTIFYING AUDIENCE </a> </h3>
                        <h3> <a> CONTEXT IS KEY </a> </h3>
                    </div>
                    <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-12'>
                        <img className='imgModelAproach' src="/assets/img/services/model.webp" alt="model image"/>
                    </div>
                </div>
            </section>

            <section className='processServices container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 firstColProcess'>
                        <h2> OUR PROCESS </h2>
                        <p> Lorem ipsum dolor sit amet consectetur. Eleifend etiam lobortis pretium velit sit. Suspendisse eu arcu morbi ac. </p>
                    </div>
                    <div className='col-12 col-sm-2 col-xl-2 col-lg-2 col-md-12'>
                        <img src="/assets/img/services/Rectangle5981.webp" alt="bottle of wine"/>
                    </div>
                    <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-12 secondColProcess'>
                        <h3> 1. Discovery </h3>
                        <p> We work with you to understand your goals, ask better questions, identify your audience, and build context. </p>
                        <h3> 3. DESIGN </h3>
                        <p> We leverage design to tell your story better. We’ll get people staring — and thinking. Clean, beautiful designs that help your narrative flow. </p>
                        <h3> 5. DELIVERY </h3>
                        <p> Finally, we will carefully collect and prepare all project files to ensure smooth and easy use in the future. </p>
                    </div>
                    <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-12 thirdColProcess'>
                        <h3> 2. Storytelling </h3>
                        <p> We will develop a foundation of the deck. We’re going to tell a story — build tone, voice, and a foundational structure that will get people thinking. </p>
                        <h3> 4. FEEDBACK </h3>
                        <p> After each phase wraps up, we’ll present our work to collect and implement your feedback if such appears. </p>
                    </div>
                </div>
            </section>

            <section className='goodToKnowServices container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                        <img src="/assets/img/services/Rectangle5982.webp" alt="over 100m"/>
                        <div className='goodToKnowText'>
                            <h2> GOOD TO </h2>
                            <h2> <span> know </span> </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='presentationSevices container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-5 col-xl-5 col-lg-5 col-md-12'>
                        <h4> <a> Presentation types </a> </h4>
                        <h4> <a> TIMEZONES </a> </h4>
                        <h4> <a> File Types </a> </h4>
                        <h4> <a> ETC </a> </h4>
                    </div>
                    <div className='col-12 col-sm-7 col-xl-7 col-lg-7 col-md-12'>
                        <p> We use our presentations to tell stories. Whether you’re looking to raise funds, sell a product, or hire and manage people, we’ve got you covered. Join us so we can tell a magical story together. </p>
                    </div>
                </div>
            </section>

            <OurServices />

            <section className='addonsServices container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                        <h2> ADD-ONS </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-12 firstColIconsAddons'>
                        <img src='/assets/img/services/animations.svg' alt="icon animations"/>
                        <h3> Animations </h3>
                    </div>
                    <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-12'>
                        <img src='/assets/img/services/infographics.svg' alt="icon complex infographics"/>
                        <h3 className='complexInfoAddon'> Complex Infographics </h3>
                    </div>
                    <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-12'>
                        <img src='/assets/img/services/asset.svg' alt="icon asset sourcing"/>
                        <h3> Asset Sourcing <br /> <span> Based on asset </span> </h3>
                    </div>
                    <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-12'>
                        <img src='/assets/img/services/editing.svg' alt="icon photo editing"/>
                        <h3> Photo Editing </h3>
                    </div>
                </div>
                <div className='row secondRowAddons'>
                    <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-12'>
                        <img src='/assets/img/services/custom.svg' alt="icon custom"/>
                        <h3> Custom <br /> <span> White Glove Service </span> </h3>
                    </div>
                    <div className='col-12 col-sm-3 col-xl-3 col-lg-3 col-md-12'>
                        <img src='/assets/img/services/timeblock.svg' alt="icon time block off"/>
                        <h3> Time Block off <br /> <span> hourly </span> </h3>
                    </div>
                    <div className='col-12 col-sm-4 col-xl-4 col-lg-4 col-md-12'>
                        <img src='/assets/img/services/rush.svg' alt="icon rush"/>
                        <h3> Rush <br /> <span> +fee </span> </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
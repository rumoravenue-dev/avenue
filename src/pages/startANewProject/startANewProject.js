import React from "react";
import { Helmet } from 'react-helmet';
import Header from '../../components/header'
import GetInContact from "../../components/getInContact";
import Footer from '../../components/footer'
import './style.css';

const startANewProject = () => {
    return (
        <>
            <Helmet>
                <title> New Project - Only fivepm </title>
            </Helmet>
        
            <div className="startANewProject">
                <Header />
                <div className="container-wide">
                    <div className="pre-paper-form">
                        <h1 class="the-title">Let's Get Started!</h1>
                        <p className="body1">Fill out the form below to help us better understand how we can help you and one of our team members will reach out shortly.</p>
                    </div>
                </div>
                <div className="form" data-paperform-id='fivepm'></div>
                <Footer />
            </div>
        </>
    )
};

export default startANewProject;


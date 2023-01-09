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
                <title> New Project - 5pm </title>
            </Helmet>
            
            <div className="startANewProject">
                <Header />
                <div className="form" data-paperform-id='fivepm'></div>
                <Footer />
            </div>
        </>
    )
};

export default startANewProject;


import React from "react";
import { Helmet } from "react-helmet";
import GetInContact from "../../components/getInContact";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./contact.css";

function Contact() {
  const contact = true;
  return (
    <>
      <Helmet>
        <title> Contact - 5pm </title>
      </Helmet>

      <div className="contact">
        <Header contact={contact}  />

        <section className="mainContact">
          <div className="row">
            <div className="col-12 col-sm-10 col-xl-12 col-lg-12 col-md-12 mainContent">
              <img src="/assets/img/contact/Vector.svg" alt="logo"/>
              <h1>It’s only fivepm…<br/>
              let’s get to work</h1> 
            </div>
          </div>
        </section>

        <section className="containerMain">
          <div className="row">
            <div className="col-12  contactusText">
              <h2>We're here ready 24/7 feel free to Contact us at anytime.</h2>
              <p><strong>It's always 5pm somewhere.</strong> Get in touch with us and Find The best way below to reach us out, or fill up the form.</p>
              <button className="btnStart">Start a new project</button>
            </div>
          </div>
        </section> 

        <GetInContact />
        <Footer />
      </div>
    </>
  );
}

export default Contact;



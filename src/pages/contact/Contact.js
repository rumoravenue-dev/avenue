import React from "react";
import GetInContact from "../../components/getInContact/getInContact";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./contact.css";

function Contact() {
  return (
    <div>
      <section className="container-main">
        {/* <Header /> */}
        <div className="row">
          <div className="col-12 col-sm-2 div-icon">
            <img src="/assets/img/contact/Vector.svg" alt="logo" />
          </div>
          <div className="col-12 col-sm-10 col-xl-10 col-lg-10 col-md-10 div-somewhere-text">
            <img className="sunset-img" src="/assets/img/contact/Sunset.svg" alt="sunset" />
            <h1>It's 5pm somewhere</h1>
          </div>
        </div>
      </section>

      {/* <section className="container-main">
        <div className="row">
          <div className="col-12 col-sm-10 col-xl-10 col-lg-10 col-md-10 div-contactus-text">
            <img className="sunset-img" src="/assets/img/contact/Sunset.svg" alt="sunset" />
            <h2>We're here ready 24/7 feel free to Contact us at anytime.</h2>
            <p><strong>It's always 5pm somewhere.</strong> Get in touch with us and Find The best way below to reach us out, or fill up the form.</p>
            <button className="btn-start">Start a new project</button>
          </div>
        </div>
      </section>
      <GetInContact />
      <Footer /> */}
    </div>
  );
}

export default Contact;

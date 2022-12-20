import React, { useState } from "react";
import { Helmet } from "react-helmet";
import TakeALook from "../../components/takeALook";
import Header from "../../components/header";
import GetInContact from "../../components/getInContact";
import Footer from "../../components/footer";
import Modal from "../../components/modal";
// import Modal from 'react-modal';
import "./portfolio.css";

function Portfolio() {
  const portfolio = true;

  // Modal.setAppElement('#portfolio');

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* <Helmet>
          <title> Portfolio - 5pm </title>
      </Helmet>
      <Header />
      <TakeALook /> */}
      <div className='modal-overlay'>
        <button onClick={openModal}>Open</button>
        { modalIsOpen && <Modal closeModal={closeModal}/>}
      </div>
      {/* <GetInContact portfolio={portfolio}/>
      <Footer /> */}
    </>
  );
}

export default Portfolio;

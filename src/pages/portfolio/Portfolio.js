import React from "react";
import Header from "../../components/header/header";
import TakeALook from "../../components/takeALook/takeALook";
import Footer from "../../components/footer/footer";
import "./portfolio.css";

function Portfolio() {
  const home = true;
  return (
    <>
      <Header />
      <TakeALook home={home}/>
      <Footer />
    </>
  );
}

export default Portfolio;

import React from "react";

import "./styles/brands.css";

const Brands = () => {
  return (
    <>
      <section className="brandsPartnerships justify-content-center align-items-center">
        <div className="row brandsPartnershipsRow justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-sm-12 partnershipsTitleOne">
            <h2>
              We've build long lasting partnerships with the most ambitious
              brands across the globe{" "}
            </h2>
          </div>
        <div className="col-12 col-md-2 img-fluid partnershipsTitle">
          <img
            src="/assets/img/home/Partnerships/AnheuserBusch.webp"
            alt=""
          />
        </div>
        <div className="col-12 col-md-2 img-fluid partnershipsTitle">
        <img src="/assets/img/home/Partnerships/Marriott.webp" alt="" />
        </div>
        <div className="col-12 col-md-2 img-fluid partnershipsTitle">
        <img src="/assets/img/home/Partnerships/Ciroc.webp" alt="" />
        </div>
        <div className="col-12 col-md-2 img-fluid partnershipsTitle">
          <img src="/assets/img/home/Partnerships/Rumor.webp" alt="" />
        </div>
        <div className="col-12 col-md-2 img-fluid partnershipsTitle">
          <img
            src="/assets/img/home/Partnerships/GH-Logo-Green.webp"
            alt=""
          />
        </div>
          <div className="row justify-content-center align-items-center ">
              <div className="col-12 col-md-2 img-fluid partnershipsTitle">
                <img
                  src="/assets/img/home/Partnerships/Appcore.webp"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-2 img-fluid partnershipsTitle">
                <img src="/assets/img/home/Partnerships/Hennessy-VSOP.webp" alt="" />
              </div>
              <div className="col-12 col-md-2 img-fluid partnershipsTitle">
                <img src="/assets/img/home/Partnerships/Pelicargo.webp" alt="" />
              </div>
              <div className="col-12 col-md-2 img-fluid partnershipsTitle">
                <img src="/assets/img/home/Partnerships/Moet-Hennessy-USA.webp" alt="" />
              </div>
              <div className="col-12 col-md-2 img-fluid partnershipsTitle">
                <img
                  src="/assets/img/home/Partnerships/Balance-Bunny.webp"
                  alt=""
                />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;

import React from "react";

import "./styles/brands.css";

const Brands = () => {
  return (
    <>
      <div className="container-wide">
        <section className="brandsPartnerships justify-content-center align-items-center">
          <div className="row brandsPartnershipsRow justify-content-center align-items-center">
            <div className="col-12 col-sm-12 partnershipsTitle">
              <h2>
                We've build long lasting partnerships with the most ambitious
                brands across the globe{" "}
              </h2>
            </div>
          </div>
        </section>
        <div className="brand-logos">
          <div><img src="/assets/img/home/partnerships-v2/anheuser-busch.svg" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/marriott.png" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/ciroc.svg" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/rumor.svg" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/greenhouse.png" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/appcore.png" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/hennessy-vsop.png" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/pelicargo.svg" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/moet-hennessy-usa.png" alt="" /></div>
          <div><img src="/assets/img/home/partnerships-v2/balance-bunny.svg" alt="" /></div>
      </div>
      </div>
    </>
  );
};

export default Brands;


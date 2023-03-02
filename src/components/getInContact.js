import React from "react"
import PaperForm from "./paperForm";
import "./styles/getInContact.css";

function getInContact(props) {
  return (
    <>
      <section className={props.portfolio ? "containerGetInTouchPort": "containerGetInTouch"}>
        <div>
        <div className="sunset-banner">
          <div className="sunset-banner--bg">
            <img src="/assets/img/contact/Sunset.svg" alt="sunset" />
          </div>
          <div className="sunset-banner--content">
            <img src="/assets/img/contact/Vector2.svg" alt="logo" className="logo"/>
            <div className="alt-text">
              <h1>IT'S ONLY FIVEPM,</h1>
              <h1>LET'S GET TO WORK.</h1>
            </div>
          </div>
        </div>
        <div className="paper-form-wrapper">
          {<PaperForm />}
        </div>
        </div>
      </section>

      {/* <div data-paperform-id="fivepm"></div> */}

    </>
  )
}

export default getInContact;


import React, { useEffect } from 'react'
// import { create } from '@lottiefiles/lottie-interactivity';
import { Player } from '@lottiefiles/react-lottie-player';
import './styles/eyeOpening.css';

export default function EyeOpening() {
  const lottieRef = React.useRef();

  useEffect(() => {
    lottieRef.current.setPlayerDirection(-1);
  });

  return (
    <section className="eyeSection container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 eyeOpening">
          <h1>EYE OPENING</h1>
          <p>Whether the presentation needs to convince or educate it always has to change audience perception. We seek insights to make decks unexpectedly enlightening for our audience.</p>
        </div>
        <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 eyeOpen">
          <img className="eye1" src="/assets/img/about/eye_blink.gif" alt="eye" />
          <img className="eyeSunset" src="/assets/img/contact/Sunset.svg" alt="sunset" />
        </div>
        <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 eyeCatching">
          <h1>EYE CATCHING</h1>
          <p>The presentation helps to see what's hidden, unseen, or simply never known before. We use design to drive their attention, focus them to clearly see, and help them feel the message.</p>
        </div>
        <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 eyeCatch">
          <Player
            className="eye"
            ref={lottieRef}
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_4m9FOC.json"
            style={{ height: '437px', width: '613px' }}
          />
          {/* <img className="eyeSunset" src="/assets/img/contact/Sunset.svg" alt="sunset" /> */}
        </div>
      </div>
    </section>
  )
}

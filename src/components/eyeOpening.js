import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function eyeOpening() {
  return (
    <section className="eyeSection container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 eyeOpening">
          <h1>EYE OPENING</h1>
          <p>Whether the presentation needs to convince or educate it always has to change audience perception. We seek insights to make decks unexpectedly enlightening for our audience.</p>
        </div>
        <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12 eyeCatching">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_4m9FOC.json"
            style={{ height: '437px', width: '613px' }}
          />
          <img className="eyeSunset" src="/assets/img/contact/Sunset.svg" alt="sunset" />
        </div>
      </div>
    </section>
  )
}

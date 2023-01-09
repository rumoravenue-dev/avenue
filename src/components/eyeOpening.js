import React from 'react';
import './styles/eyeOpening.css';

export default function EyeOpening() {
  return (
    <section className="eyeSection container-fluid">
      <div className='row justify-content-center'>
        <div className='col col-md-4'>
          <div className="col box-text">
            <h1 className='title-eye'>
              EYE
            </h1>
            <h1 className='title-eye'>
              OPENING
            </h1>
            <p className='description-text-eye'>
              Whether the presentation needs to convince or educate it always has to change audience perception. We seek insights to make decks unexpectedly enlightening for our audience.
            </p>
          </div>
          <div className="col eyeCatching">
            <h1 className='title-eye'>
              EYE
            </h1>
            <h1 className='title-eye'>
              CATCHING
            </h1>
            <p className='description-text-eye'>
              The presentation helps to see what's hidden, unseen, or simply never known before. We use design to drive their attention, focus them to clearly see, and help them feel the message.
            </p>
          </div>
        </div>
        <div className='col col-md-auto container-eye'>
          <img className="img-eye" src="/assets/img/about/eye.gif" alt="eye" />
        </div>
      </div>
    </section>
  )
}


import React, { useEffect } from 'react';
import './styles/eyeOpening.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Spacer from './spacer';

export default function EyeOpening() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section className="eyeSection container-fluid">
      <div className='container-wide'>
        <Spacer height={200} />
        <div className='row justify-content-between'>
          <div className='col col-md-4'>
            <div className="col box-text" data-aos="fade-up">
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
            <div className="col eyeCatching" data-aos="fade-up">
              <h1 className='title-eye'>
                EYE
              </h1>
              <h1 className='title-eye'>
                CATCHING
              </h1>
              <p className='description-text-eye'>
              The presentation uncovers hidden, unknown, or unseen aspects. We leverage design to capture attention, promote clarity, and enhance the impact of the message.
              </p>
            </div>
          </div>
          <div className='col col-md-auto container-eye'>
            <img className="img-eye" src="/assets/img/about/eye.gif" alt="eye" />
          </div>
        </div>
        <Spacer height={200} />
      </div>
    </section>
  )
}


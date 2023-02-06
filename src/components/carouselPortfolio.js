import React, { useState } from 'react';
import Modal from './modal';
import ReactSwipe from 'react-swipe';

import "./styles/carouselPortfolio.css"

import CarouselAtria from './sliders/atria';
import CarouselTMRW from './sliders/TMRW';
import CarouselTina from './sliders/tina';
import CarouselRiboli from './sliders/riboli';

import CarouselNewEngland from './sliders/newEngland';
import CarouselHennessy from './sliders/hennessy';
import CarouselInPremisse from './sliders/inPremisse';
import CarouselGreenHouseWine from './sliders/greenHouseWine';

import CarouselOmit from './sliders/omit';
import CarouselBookAble from './sliders/bookAble';
import CarouselPelicargo from './sliders/pelicargo';
import CarouselGaylordHotels from './sliders/gaylordHotels'

import CarouselLilDan from './sliders/lilDan';
import CarouselWerx from './sliders/werx';
import CarouselRyna from './sliders/ryna';

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function CarouselPort() {

  const [isModalAtria, setIsModalAtria] = useState(false)
  const [isModalTMRW, setisModalTMRW] = useState(false)
  const [isModalTina, setisModalTina] = useState(false)
  const [isModalRiboli, setisModalRiboli] = useState(false)

  const [isModalNewEngland, setisModalNewEngland] = useState(false)
  const [isModalHennessy, setisModalHennessy] = useState(false)
  const [isModalInPremisse, setisModalInPremisse] = useState(false)
  const [isModalGreenHouseWine, setisModalGreenHouseWine] = useState(false)

  const [isModalOmit, setIsModalOmit] = useState(false)
  const [isModalBookAble, setisModalBookAble] = useState(false)
  const [isModalPelicargo, setisModalPelicargo] = useState(false)
  const [isModalGaylordHotels, setisModalGaylordHotels] = useState(false)

  const [isModalLilDan, setIsModalLilDan] = useState(false)
  const [isModalWerx, setisModalWerx] = useState(false)
  const [isModalRyna, setisModalRyna] = useState(false)

  let reactSwipeEl;

  return (
    <>
      {isModalAtria ? (<Modal onClose={() => setIsModalAtria(false)}> <CarouselAtria onClose={() => setIsModalAtria(false)} /> </Modal>) : null}
      {isModalTMRW ? (<Modal onClose={() => setisModalTMRW(false)} > <CarouselTMRW onClose={() => setisModalTMRW(false)} /> </Modal>) : null}
      {isModalTina ? (<Modal onClose={() => setisModalTina(false)} > <CarouselTina onClose={() => setisModalTina(false)} /> </Modal>) : null}
      {isModalRiboli ? (<Modal onClose={() => setisModalRiboli(false)} > <CarouselRiboli onClose={() => setisModalRiboli(false)} /> </Modal>) : null}

      {isModalNewEngland ? (<Modal onClose={() => setisModalNewEngland(false)} > <CarouselNewEngland onClose={() => setisModalNewEngland(false)}/> </Modal>) : null}
      {isModalHennessy ? (<Modal onClose={() => setisModalHennessy(false)} > <CarouselHennessy onClose={() => setisModalHennessy(false)}/> </Modal>) : null}
      {isModalInPremisse ? (<Modal onClose={() => setisModalInPremisse(false)} > <CarouselInPremisse onClose={() => setisModalInPremisse(false)}/> </Modal>) : null}
      {isModalGreenHouseWine ? (<Modal onClose={() => setisModalGreenHouseWine(false)} > <CarouselGreenHouseWine onClose={() => setisModalGreenHouseWine(false)}/> </Modal>) : null}

      {isModalOmit ? (<Modal onClose={() => setIsModalOmit(false)} > <CarouselOmit onClose={() => setIsModalOmit(false)}/> </Modal>) : null}
      {isModalBookAble ? (<Modal onClose={() => setisModalBookAble(false)} > <CarouselBookAble onClose={() => setisModalBookAble(false)}/> </Modal>) : null}
      {isModalPelicargo ? (<Modal onClose={() => setisModalPelicargo(false)} > <CarouselPelicargo onClose={() => setisModalPelicargo(false)}/> </Modal>) : null}
      {isModalGaylordHotels ? (<Modal onClose={() => setisModalGaylordHotels(false)} > <CarouselGaylordHotels onClose={() => setisModalGaylordHotels(false)}/> </Modal>) : null}

      {isModalLilDan ? (<Modal onClose={() => setIsModalLilDan(false)} > <CarouselLilDan onClose={() => setIsModalLilDan(false)}/> </Modal>) : null}
      {isModalWerx ? (<Modal onClose={() => setisModalWerx(false)} > <CarouselWerx onClose={() => setisModalWerx(false)}/> </Modal>) : null}
      {isModalRyna ? (<Modal onClose={() => setisModalRyna(false)} > <CarouselRyna onClose={() => setisModalRyna(false)}/> </Modal>) : null}

      <div className='controls'>
        <div className='controlsPortfolio'>
          <a className='buttonPrev' onClick={() => reactSwipeEl.prev()}>
            <img src="/assets/img/home/carousel/Arrowleft.webp" alt="left" />
          </a>
          <a className='buttonNext' onClick={() => reactSwipeEl.next()}>
            <img src="/assets/img/home/carousel/Arrowright.webp" alt="right" />
          </a>
        </div>
      </div>

      <ReactSwipe
        className="carouselPortfolio"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
        widthOfSiblingSlidePreview={950}
      >

        <div className='carouselSlide'>
          <div className='slides'>
            <img className='slidesIMG' src='/assets/img/portfolio/projects/atria/Atria2.webp' alt="slide-1" onClick={() => setIsModalAtria(true)} />
            <img className='slidesIMG' src='/assets/img/sliders/TMRW1.webp' alt="slide-1" onClick={() => setisModalTMRW(true)} />
          </div>
          <div className='slides'>
          <img className='slidesIMG' src='/assets/img/portfolio/projects/ryna/Ryna1.webp' alt="slide-1" onClick={() => setisModalRyna(true)} />
            <img className='slidesIMG' src='/assets/img/sliders/RIBOLI1.webp' alt="slide-1" onClick={() => setisModalRiboli(true)} />
          </div>
        </div>
        <div className='carouselSlide'>
          <div className='slides'>
            <img className='slidesIMG' src='/assets/img/sliders/NEWENGLAND1.webp' alt="slide-1" onClick={() => setisModalNewEngland(true)} />
            <img className='slidesIMG' src='/assets/img/sliders/HENNESSY1.webp' alt="slide-1" onClick={() => setisModalHennessy(true)} />
          </div>
          <div className='slides'>
            <img className='slidesIMG' src='/assets/img/sliders/INPREMISSE1.webp' alt="slide-1" onClick={() => setisModalInPremisse(true)} />
            <img className='slidesIMG' src='/assets/img/sliders/GREENHOUSEWINE1.webp' alt="slide-1" onClick={() => setisModalGreenHouseWine(true)} />
          </div>
        </div>
        <div className='carouselSlide'>
          <div className='slides'>
            <img className='slidesIMG' src='/assets/img/portfolio/projects/omit/Artboard 1 (1).webp' alt="slide-1" onClick={() => setIsModalOmit(true)} />
            <img className='slidesIMG' src='/assets/img/portfolio/projects/bookable/Artboard 1.webp' alt="slide-1" onClick={() => setisModalBookAble(true)} />
          </div>
          <div className='slides'>
            <img className='slidesIMG' src='/assets/img/portfolio/projects/pelicargo/Pelicargo1.webp' alt="slide-1" onClick={() => setisModalPelicargo(true)} />
            <img className='slidesIMG' src='/assets/img/portfolio/projects/gaylord/Gaylord_01.webp' alt="slide-1" onClick={() => setisModalGaylordHotels(true)} />
          </div>
        </div>
        <div className='carouselSlide'>
          <div className='slides'>
            <img className='slidesIMG' src='/assets/img/portfolio/projects/lildan/LILDAN1.webp' alt="slide-1" onClick={() => setIsModalLilDan(true)} />
            <img className='slidesIMG' src='/assets/img/portfolio/projects/werx/werx1.webp' alt="slide-1" onClick={() => setisModalWerx(true)} />
          </div>
          <div className='slides'>
            
          </div>
        </div>
      </ReactSwipe>
    </>
  );
}

export default CarouselPort;
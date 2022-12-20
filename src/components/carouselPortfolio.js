import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from './modal';

import CarouselAtria from './Sliders/atria';
import CarouselTMRW from './Sliders/TMRW';
import CarouselTina from './Sliders/tina';
import CarouselRiboli from './Sliders/riboli';

import CarouselNewEngland from './Sliders/newEngland';
import CarouselHennessy from './Sliders/newEngland';
import CarouselInPremisse from './Sliders/inPremisse';
import CarouselGreenHouseWine from './Sliders/greenHouseWine';

import CarouselOmit from './Sliders/omit';
import CarouselBookAble from './Sliders/bookAble';
import CarouselPelicargo from './Sliders/pelicargo';
import CarouselGaylordHotels from './Sliders/gaylordHotels'

import CarouselLilDan from './Sliders/lilDan';
import CarouselWerx from './Sliders/werx';
import CarouselRyna from './Sliders/ryna';

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

  return (
    <>
      {isModalAtria ?( <Modal onClose={() => setIsModalAtria(false)} > <CarouselAtria/> </Modal>) : null}
      {isModalTMRW ?( <Modal onClose={() => setisModalTMRW(false)} > <CarouselTMRW /> </Modal>) : null}
      {isModalTina ?( <Modal onClose={() => setisModalTina(false)} > <CarouselTina /> </Modal>) : null}
      {isModalRiboli ?( <Modal onClose={() => setisModalRiboli(false)} > <CarouselRiboli/> </Modal>) : null}

      {isModalNewEngland ?( <Modal onClose={() => setisModalNewEngland(false)} > <CarouselNewEngland/> </Modal>) : null}
      {isModalHennessy ?( <Modal onClose={() => setisModalHennessy(false)} > <CarouselHennessy/> </Modal>) : null}
      {isModalInPremisse ?( <Modal onClose={() => setisModalInPremisse(false)} > <CarouselInPremisse/> </Modal>) : null}
      {isModalGreenHouseWine ?( <Modal onClose={() => setisModalGreenHouseWine(false)} > <CarouselGreenHouseWine/> </Modal>) : null}

      {isModalOmit ?( <Modal onClose={() => setIsModalOmit(false)} > <CarouselOmit/> </Modal>) : null}
      {isModalBookAble ?( <Modal onClose={() => setisModalBookAble(false)} > <CarouselBookAble/> </Modal>) : null}
      {isModalPelicargo ?( <Modal onClose={() => setisModalPelicargo(false)} > <CarouselPelicargo/> </Modal>) : null}
      {isModalGaylordHotels ?( <Modal onClose={() => setisModalGaylordHotels(false)} > <CarouselGaylordHotels/> </Modal>) : null}

      {isModalLilDan ?( <Modal onClose={() => setIsModalLilDan(false)} > <CarouselLilDan/> </Modal>) : null}
      {isModalWerx ?( <Modal onClose={() => setisModalWerx(false)} > <CarouselWerx/> </Modal>) : null}
      {isModalRyna ?( <Modal onClose={() => setisModalRyna(false)} > <CarouselRyna/> </Modal>) : null}

      <Carousel nextIcon prevIcon>
        <Carousel.Item>
          <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1" onClick={() => setIsModalAtria(true)}/>
          <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"  onClick={() => setisModalTMRW(true)}/>
          <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"  onClick={() => setisModalTina(true)}/>
          <img src='/assets/img/portfolio/Rectangle4.webp' alt="portfolio-4"  onClick={() => setisModalRiboli(true)}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"  onClick={() => setisModalNewEngland(true)}/>
          <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"  onClick={() => setisModalHennessy(true)}/>
          <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"  onClick={() => setisModalInPremisse(true)}/>
          <img src='/assets/img/portfolio/Rectangle4.webp' alt="portfolio-4"  onClick={() => setisModalGreenHouseWine(true)}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"  onClick={() => setIsModalOmit(true)}/>
          <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"  onClick={() => setisModalBookAble(true)}/>
          <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"  onClick={() => setisModalPelicargo(true)}/>
          <img src='/assets/img/portfolio/Rectangle4.webp' alt="portfolio-4"  onClick={() => setisModalGaylordHotels(true)}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src='/assets/img/portfolio/Rectangle1.webp' alt="portfolio-1"  onClick={() => setIsModalLilDan(true)}/>
          <img src='/assets/img/portfolio/Rectangle2.webp' alt="portfolio-2"  onClick={() => setisModalWerx(true)}/>
          <img src='/assets/img/portfolio/Rectangle3.webp' alt="portfolio-3"  onClick={() => setisModalRyna(true)}/>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselPort;
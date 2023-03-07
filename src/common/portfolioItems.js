import CarouselTMRW from "../components/sliders/TMRW";
import CarouselRiboli from "../components/sliders/riboli";

import CarouselNewEngland from "../components/sliders/newEngland";
import CarouselHennessy from "../components/sliders/hennessy";
import CarouselGreenHouseWine from "../components/sliders/greenHouseWine";

import CarouselOmit from "../components/sliders/omit";
import CarouselBookAble from "../components/sliders/bookAble";
import CarouselPelicargo from "../components/sliders/pelicargo";
import CarouselGaylordHotels from "../components/sliders/gaylordHotels";

import CarouselLilDan from "../components/sliders/lilDan";
import CarouselWerx from "../components/sliders/werx";
import Carouselroom from "../components/sliders/room";

const portfolioItems = [
  {
    id: 1,
    src: "/assets/img/sliders/TMRW1.webp",
    ModalComponent: CarouselTMRW,
    DetailUrl: '/portfolio/tmrw',
  },
  {
    id: 2,
    src: "/assets/img/portfolio/projects/lildan/LILDAN1.webp",
    ModalComponent: CarouselLilDan,
    DetailUrl: '/portfolio/lildan',
  },
  {
    id: 3,
    src: "/assets/img/portfolio/projects/room/room1.webp",
    ModalComponent: Carouselroom,
    DetailUrl: '/portfolio/room',
  },
  {
    id: 4,
    src: "/assets/img/sliders/RIBOLI1.webp",
    ModalComponent: CarouselRiboli,
    DetailUrl: '/portfolio/riboli',
  },
  {
    id: 5,
    src: "/assets/img/sliders/NEWENGLAND1.webp",
    ModalComponent: CarouselNewEngland,
    DetailUrl: '/portfolio/new-england-whalers',
  },
  {
    id: 6,
    src: "/assets/img/sliders/HENNESSY1.webp",
    ModalComponent: CarouselHennessy,
    DetailUrl: '/portfolio/hennessy',
  },
  /*
  {
    id: 7,
    src: "/assets/img/sliders/INPREMISSE1.webp",
    ModalComponent: CarouselInPremisse,
    DetailUrl: '/portfolio/tmrw',
  },
  */
  {
    id: 7,
    src: "/assets/img/sliders/GREENHOUSEWINE1.webp",
    ModalComponent: CarouselGreenHouseWine,
    DetailUrl: '/portfolio/stage-leap',
  },
  {
    id: 8,
    src: "/assets/img/portfolio/projects/omit/Artboard 1 (1).webp",
    ModalComponent: CarouselOmit,
    DetailUrl: '/portfolio/omit',
  },
  {
    id: 9,
    src: "/assets/img/portfolio/projects/bookable/Artboard 1.webp",
    ModalComponent: CarouselBookAble,
    DetailUrl: '/portfolio/tmrw',
  },
  {
    id: 10,
    src: "/assets/img/portfolio/projects/pelicargo/Pelicargo1.webp",
    ModalComponent: CarouselPelicargo,
    DetailUrl: '/portfolio/pelicargo',
  },
  {
    id: 11,
    src: "/assets/img/portfolio/projects/gaylord/Gaylord_01.webp",
    ModalComponent: CarouselGaylordHotels,
    DetailUrl: '/portfolio/gaylord',
  },
  {
    id: 12,
    src: "/assets/img/portfolio/projects/werx/werx1.webp",
    ModalComponent: CarouselWerx,
    DetailUrl: '/portfolio/werx',
  },
];

export default portfolioItems

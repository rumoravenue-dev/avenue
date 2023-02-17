import Modal from "./modal";

import CarouselTMRW from "./sliders/TMRW";
import CarouselRiboli from "./sliders/riboli";

import CarouselNewEngland from "./sliders/newEngland";
import CarouselHennessy from "./sliders/hennessy";
import CarouselInPremisse from "./sliders/inPremisse";
import CarouselGreenHouseWine from "./sliders/greenHouseWine";

import CarouselOmit from "./sliders/omit";
import CarouselBookAble from "./sliders/bookAble";
import CarouselPelicargo from "./sliders/pelicargo";
import CarouselGaylordHotels from "./sliders/gaylordHotels";

import CarouselLilDan from "./sliders/lilDan";
import CarouselWerx from "./sliders/werx";
import CarouselRyna from "./sliders/ryna";
import { useCallback, useEffect, useState } from "react";

const portfolioItems = [
  {
    id: 1,
    src: "/assets/img/sliders/TMRW1.webp",
    ModalComponent: CarouselTMRW,
  },
  {
    id: 2,
    src: "/assets/img/portfolio/projects/lildan/LILDAN1.webp",
    ModalComponent: CarouselLilDan,
  },
  {
    id: 3,
    src: "/assets/img/portfolio/projects/ryna/Ryna1.webp",
    ModalComponent: CarouselRyna,
  },
  {
    id: 4,
    src: "/assets/img/sliders/RIBOLI1.webp",
    ModalComponent: CarouselRiboli,
  },
  {
    id: 5,
    src: "/assets/img/sliders/NEWENGLAND1.webp",
    ModalComponent: CarouselNewEngland,
  },
  {
    id: 6,
    src: "/assets/img/sliders/HENNESSY1.webp",
    ModalComponent: CarouselHennessy,
  },
  {
    id: 7,
    src: "/assets/img/sliders/INPREMISSE1.webp",
    ModalComponent: CarouselInPremisse,
  },
  {
    id: 8,
    src: "/assets/img/sliders/GREENHOUSEWINE1.webp",
    ModalComponent: CarouselGreenHouseWine,
  },
  {
    id: 9,
    src: "/assets/img/portfolio/projects/omit/Artboard 1 (1).webp",
    ModalComponent: CarouselOmit,
  },
  {
    id: 10,
    src: "/assets/img/portfolio/projects/bookable/Artboard 1.webp",
    ModalComponent: CarouselBookAble,
  },
  {
    id: 11,
    src: "/assets/img/portfolio/projects/pelicargo/Pelicargo1.webp",
    ModalComponent: CarouselPelicargo,
  },
  {
    id: 12,
    src: "/assets/img/portfolio/projects/gaylord/Gaylord_01.webp",
    ModalComponent: CarouselGaylordHotels,
  },
  {
    id: 13,
    src: "/assets/img/portfolio/projects/werx/werx1.webp",
    ModalComponent: CarouselWerx,
  },
];

const ITEMS_LOAD = 4;
const SCROLL_OFFSET = 200;

const LazyPortfolio = ({
  isLoadMore,
  enableLazyBehaviour,
  className = "",
  ...otherProps
}) => {
  const [portfolios, setPortfolio] = useState(
    portfolioItems.slice(0, ITEMS_LOAD)
  );

  const fetchMoreData = useCallback(() => {
    const itemsLoaded = portfolios.length;
    setPortfolio(portfolioItems.slice(0, itemsLoaded + ITEMS_LOAD));
  }, [portfolios]);

  const [isModalVisible, showModal] = useState(false);
  const [ModalComponent, setModalComponent] = useState();

  useEffect(() => {
    if (enableLazyBehaviour && !isLoadMore) {
      const calculateBottom = () => {
        var element = document.getElementById("lazyContainer");

        if (
          window.scrollY - SCROLL_OFFSET >=
          element.offsetTop + element.scrollHeight - window.innerHeight
        ) {
          fetchMoreData();
        }
      };

      window.addEventListener("scroll", calculateBottom);

      return () => {
        window.removeEventListener("scroll", calculateBottom);
      };
    }
  }, [portfolios]);

  const handleModalVisibility = useCallback((index) => {
    showModal(true);
    const ModalComponent = () => portfolioItems.at(index - 1).ModalComponent;
    setModalComponent(ModalComponent);
  }, []);

  const handleModalClose = useCallback(() => {
    showModal(false);
    setModalComponent(null);
  }, []);

  return (
    <>
      <div
        className={`carouselPortfolio lazyPortfolio ${className}`}
        id="lazyContainer"
        {...otherProps}
      >
        <div className="row">
          {portfolios.map((portfolio) => (
            <div className="col-sm-12 col-md-6 p-0" key={portfolio.id}>
              <img
                src={portfolio.src}
                onClick={() => handleModalVisibility(portfolio.id)}
              />
            </div>
          ))}
        </div>
        {enableLazyBehaviour && isLoadMore && (
          <div className="text-center my-3">
            <button onClick={fetchMoreData} className="btn-app-primary">
              Show More
            </button>
          </div>
        )}
      </div>
      {isModalVisible && ModalComponent && (
        <Modal>
          <ModalComponent onClose={() => handleModalClose()} />
        </Modal>
      )}
    </>
  );
};

export default LazyPortfolio;

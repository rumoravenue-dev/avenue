import Modal from "./modal";
import { useCallback, useEffect, useState } from "react";
import portfolioItems from '../common/portfolioItems';

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
              <a href={portfolio.DetailUrl}>
                <img
                  src={portfolio.src}
               />
               </a>

               {/*<img
                  src={portfolio.src}
                  onClick={() => handleModalVisibility(portfolio.id)}
              />*/}

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

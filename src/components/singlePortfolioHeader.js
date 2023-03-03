
import Spacer from './spacer';


const SinglePortfolioHeader = (props) => {
  return (
    <>
      <div className="col-12 col-sm-12 portifolioContent">
        <a href="/portfolio" className="d-inline-block">
          <img
            className="portfolio-back"
            src="/assets/img/portfolio/chevron-left.svg"
            alt="back"
          />
          BACK
        </a>
        <Spacer height={50} />
        <img
          className="portfolio-single-title"
          src={ props.titleImg }
          alt={ props.title }
        />
      </div>
      <Spacer height={80} />
    </>
  )
}

export default SinglePortfolioHeader

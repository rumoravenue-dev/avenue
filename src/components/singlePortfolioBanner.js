
import Spacer from './spacer';


const SinglePortfolioBanner = (props) => {
  return (
    <>
      <div className="col-12 col-sm-12 singlePortfolioBanner">
        <img
          className="portfolio-single-banner"
          src={props.banner_image}
          alt={props.title}
        /> 
      </div>
      <Spacer height={80} />
    </>
  )
} 

export default SinglePortfolioBanner

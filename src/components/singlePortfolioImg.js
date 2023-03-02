
import Spacer from './spacer';


const SinglePortfolioImg = (props) => {
  return (
    <>
      <div className="single-detail-image-">
        <img
          className="portfolio-single-image"
          src={props.image_url}
          alt={props.title}
        /> 
      </div>
      <Spacer height={props.spacer? props.spacer :120 } />
    </>
  )
}

export default SinglePortfolioImg

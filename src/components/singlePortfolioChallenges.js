
import Spacer from './spacer';


const SinglePortfolioChallenges = (props) => {
  return (
    <>
      <div className="col-12 col-sm-12 portfolioDetails">
        <h3>Overview</h3>
        <Spacer height={20} />
        <p>{props.text}</p>
      </div>
      <Spacer height={50} />
    </>
  )
}

export default SinglePortfolioChallenges

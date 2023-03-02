
import Spacer from './spacer';


const SinglePortfolioIndstryAndTools = (props) => {
  let { industries } = props.industries;
  let { tools } = props.tools;
  return (
    <>
      <div className="col-12 col-sm-7 portfolioDetails industry">
        <h3>Industry</h3>
        <Spacer height={20} />
        <p>
          {industries.map((value,key) => 
            <span>{value}</span>
          )}
        </p>
      </div>
      <div className="col-12 col-sm-5 portfolioDetails d-flex justify-content-end">
        <div className="d-inline-block">
          <h3>Tools Used</h3>
          <Spacer height={20} />
          <ul className="tech-stack">
            {tools.map((value,key) =>
              <li>
                <img
                    src= {"/assets/img/portfolio/projects/tools/"+value+".svg" }
                    alt={value}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      <Spacer height={120} />
    </>
  )
}

export default SinglePortfolioIndstryAndTools

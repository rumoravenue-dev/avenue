
import $ from "jquery";
import style from "./styles/ourservices.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const TabContentFunds = () => (
  <div className="row fundsServices">
    <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
      <div className="card cardInvestorDeck">
        <div className="card-body">
          <div className="card-text">
            <p>
              {" "}
              INVESTOR DECK{" "}
              <a
                href="contact"
                className="arrowOurServices"
              >
                {" "}
                <span className="textHover">
                  {" "}
                  →{" "}
                </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
      <div className="card cardStartupPitch">
        <div className="card-body">
          <div className="card-text">
            <p>
              {" "}
              STARTUP PITCH{" "}
              <a
                href="contact"
                className="arrowOurServices"
              >
                {" "}
                <span className="textHover">
                  {" "}
                  →{" "}
                </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="d-none d-md-block col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
      <div className="card cardNone">
        <div className="card-body">
          <div className="card-text">
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const TabContentSell = () => (
  <>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardBusinessProposal">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                BUSINESS PROPOSAL{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  <span class="arrow-wrapper"></span>
                    {" "}
                    <span className="textHover">
                      {" "}
                      →{" "}
                    </span>{" "}
                    
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardCompanyPresentation">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                COMPANY PRESENTATION{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardProductPresentation">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                PRODUCT PRESENTATION{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardSalesDeck">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                SALES DECK{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardServiceDeck">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                SERVICE DECK{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

const TabContentHire = () => (
  <>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardBigNewsDeck">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                BIG NEWS DECK{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardBrandedTemplate">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                BRANDED TEMPLATE{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardBoardingPresentation">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                ON-BOARDING PRESENTATION{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardPolicyPlaybook">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                POLICY DECK & PLAYBOOK{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardProgressReport">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                PROGRESS REPORT{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardTraining">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                CORPORATE TRAINING{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
)

const TabContentPersonal = () => (
  <div className="row fundsServices">
    <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
      <div className="card cardQuickPresentations">
        <div className="card-body">
          <div className="card-text">
            <p>
              {" "}
              QUICK PRESENTATIONS{" "}
              <a
                href="contact"
                className="arrowOurServices"
              >
                {" "}
                <span className="textHover">
                  {" "}
                  →{" "}
                </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
      <div className="card cardWedding">
        <div className="card-body">
          <div className="card-text">
            <p>
              {" "}
              WEDDING SLIDESHOWS{" "}
              <a
                href="contact"
                className="arrowOurServices"
              >
                {" "}
                <span className="textHover">
                  {" "}
                  →{" "}
                </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
      <div className="card cardBirthday">
        <div className="card-body">
          <div className="card-text">
            <p>
              {" "}
              BIRTHDAY SLIDESHOWS{" "}
              <a
                href="contact"
                className="arrowOurServices"
              >
                {" "}
                <span className="textHover">
                  {" "}
                  →{" "}
                </span>{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const TabContentAdditional = () => (
  <>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardIntro">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                1 PAGER INTRO{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardAgency">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                AGENCY{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardBranding">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                BRANDING{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardRedesign">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                REDESIGN{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardReview">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                REVIEW{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardMagazine">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                MAGAZINE{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardProgressReport1">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                PROGRESS REPORT{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardConference">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                CONFERENCE{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardLegalPresentations">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                LEGAL PRESENTATIONS{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row fundsServices">
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardTrialExhibits">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                TRIAL EXHIBITS{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-xl-4 col-lg-4 col-md-4">
        <div className="card cardEventTalks">
          <div className="card-body">
            <div className="card-text">
              <p>
                {" "}
                EVENT TALKS{" "}
                <a
                  href="contact"
                  className="arrowOurServices"
                >
                  {" "}
                  <span className="textHover">
                    {" "}
                    →{" "}
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

  const OurServices = () => {
    $(document).on("click", function () {
      $('a').removeClass("actived");
      $(this).addClass("active");
      $(this).removeClass("active");
    });

  return (
    <div className="container-wide">
      <section className="ourServices container-fluid">
        <div className="row colum-services">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                <h2> OUR SERVICES </h2>
                <p>
                  {" "}
                  One-stop-shop to solve all your presentation problems and
                  headaches.{" "}
                </p>
                <div className="borderOurServices"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                <Tab.Container defaultActiveKey="all">
                  <Row>
                    <Col sm={3}>
                      <Nav
                        variant="pills"
                        className="flex-column tabsOurServices"
                      >
                        <Nav.Item>
                          <Nav.Link className="actived d-none d-md-block" eventKey="all"> ALL </Nav.Link>
                          <div className="d-block d-md-none mobileOnlyServices"></div>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="funds"> RAISE FUNDS </Nav.Link>
                          <div className="d-block d-md-none mobileOnlyServices">
                            <TabContentFunds />
                          </div>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="" eventKey="sell"> SELL PRODUCTS </Nav.Link>
                          <div className="d-block d-md-none mobileOnlyServices">
                            <TabContentSell />
                          </div>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="" eventKey="hire">
                            {" "}
                            HIRE & MANAGE PEOPLE{" "}
                          </Nav.Link>
                          <div className="d-block d-md-none mobileOnlyServices">
                            <TabContentHire />
                          </div>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="" eventKey="personal"> PERSONAL </Nav.Link>
                          <div className="d-block d-md-none mobileOnlyServices">
                            <TabContentPersonal />
                          </div>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="" eventKey="additional">
                            {" "}
                            ADDITIONAL{" "}
                          </Nav.Link>
                          <div className="d-block d-md-none mobileOnlyServices">
                            <TabContentAdditional />
                          </div>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col className="d-none d-md-block" sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="all">
                          <p className="services-section-title">RAISE FUNDS</p>
                          <TabContentFunds />
                          <p className="services-section-title">SELL PRODUCTS</p>
                          <TabContentSell />
                          <p className="services-section-title">HIRE & MANAGE PEOPLE</p>
                          <TabContentHire />
                          <p className="services-section-title">PERSONAL</p>
                          <TabContentPersonal />
                          <p className="services-section-title">ADDITIONAL</p>
                          <TabContentAdditional />
                        </Tab.Pane>
                        <Tab.Pane eventKey="funds">
                          <TabContentFunds />
                        </Tab.Pane>
                        <Tab.Pane eventKey="sell">
                        <TabContentSell />
                        </Tab.Pane>
                        <Tab.Pane eventKey="hire">
                          <TabContentHire />
                        </Tab.Pane>
                        <Tab.Pane eventKey="personal">
                          <TabContentPersonal />
                        </Tab.Pane>
                        <Tab.Pane eventKey="additional">
                          <TabContentAdditional />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurServices;

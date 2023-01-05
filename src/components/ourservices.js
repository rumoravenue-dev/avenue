import $ from "jquery";
import style from "./styles/ourservices.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const OurServices = () => {
  $(document).on("click", "a", function () {
    $(this).addClass("actived");
  });

  return (
    <>
      <section className="ourServices container-fluid">
        <div className="row colum-services justify-content-center">
          <div className="col-12 justify-content-center">
            <div className="row">
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                <h2> OUR SERVICES </h2>
                <p>
                  {" "}
                  One-stop-shop to solve all your presentation problems and
                  headaches.{" "}
                </p>
                <hr></hr>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                <Tab.Container defaultActiveKey="additional">
                  <Row>
                    <Col sm={3}>
                      <Nav
                        variant="pills"
                        className="flex-column tabsOurServices"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="funds"> RAISE FUNDS </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="sell"> SELL PRODUCTS </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="hire">
                            {" "}
                            HIRE & MANAGE PEOPLE{" "}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="personal"> PERSONAL </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="additional">
                            {" "}
                            ADDITIONAL{" "}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="funds">
                          <div className="row fundsServices">
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sell">
                          <div className="row fundsServices">
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="hire">
                          <div className="row fundsServices">
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="personal">
                          <div className="row fundsServices">
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="additional">
                          <div className="row fundsServices">
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
                            <div className="col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12">
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
    </>
  );
};

export default OurServices;

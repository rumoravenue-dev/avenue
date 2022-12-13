import style from './styles/ourservices.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const OurServices = () => {
    return (
        <>
            <section className='ourServices container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                        <h2> OUR SERVICES </h2>
                        <p> Lorem ipsum dolor sit amet consectetur. Eleifend etiam lobortis pretium velit sit. Suspendisse eu arcu morbi ac. </p>
                        <hr></hr>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12'>
                        <Tab.Container defaultActiveKey="additional">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="funds"> RAISE FUNDS </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="sell"> SELL PRODUCTS </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="hire"> HIRE & MANAGE PEOPLE </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="additional"> ADDITIONAL </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="funds">
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardInvestorDeck'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/raisefunds.svg' alt="raise funds icon"/>
                                                        <p> INVESTOR DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardStartupPitch'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/raisefunds.svg' alt="investor deck icon"/>
                                                        <p> STARTUP PITCH <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sell">
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardBusinessProposal'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> BUSINESS PROPOSAL <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardCompanyPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> COMPANY PRESENTATION <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardProductPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> PRODUCT PRESENTATION <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardSalesDeck'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> SALES DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardServiceDeck'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> SERVICE DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="hire">
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardBigNewsDeck'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> BIG NEWS DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBrandedTemplate'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> BRANDED TEMPLATE <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBoardingPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> ON-BOARDING PRESENTATION <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardPolicyPlaybook'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> POLICY DECK & PLAYBOOK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardProgressReport'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> PROGRESS REPORT <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="additional">
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardIntro'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> 1 PAGER INTRO <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardAgency'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> AGENCY <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBranding'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> BRANDING <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardTraining'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> CORPORATE TRAINING <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardRedesign'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> REDESIGN <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardReview'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> REVIEW <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardMagazine'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> MAGAZINE <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardProgressReport1'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> PROGRESS REPORT <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardConference'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> CONFERENCE <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row fundsServices'>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardLegalPresentations'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> LEGAL PRESENTATIONS <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardQuickPresentations'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> QUICK PRESENTATIONS <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardTrialExhibits'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img className='imgHover' src='/assets/img/ourservices/additional.svg' alt="additional icon"/>
                                                        <p> TRIAL EXHIBITS <span className='textHover'> → </span> </p>
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
            </section>
        </>
    )
}

export default OurServices;
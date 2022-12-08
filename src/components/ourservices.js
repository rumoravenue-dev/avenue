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
                                                        <p> INVESTOR DECK </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardStartupPitch'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/raisefunds.svg' alt="investor deck icon"/>
                                                        <p> STARTUP PITCH </p>
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
                                                        <p> BUSINESS PROPOSAL </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardCompanyPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> COMPANY PRESENTATION </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardProductPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> PRODUCT PRESENTATION </p>
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
                                                        <p> SALES DECK </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardServiceDeck'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/sellproducts.svg' alt="sell products icon"/>
                                                        <p> SERVICE DECK </p>
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
                                                        <p> BIG NEWS DECK </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBrandedTemplate'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> BRANDED TEMPLATE </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBoardingPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> ON-BOARDING PRESENTATION </p>
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
                                                        <p> POLICY DECK & PLAYBOOK </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardProgressReport'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <img src='/assets/img/ourservices/hireandmanage.svg' alt="hire and manage icon"/>
                                                        <p> PROGRESS REPORT </p>
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
                                                        <p> 1 PAGER INTRO </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardAgency'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> AGENCY </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBranding'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> BRANDING </p>
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
                                                        <p> CORPORATE TRAINING </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardRedesign'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> REDESIGN </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardReview'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> REVIEW </p>
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
                                                        <p> MAGAZINE </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardProgressReport1'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> PROGRESS REPORT </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardConference'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> CONFERENCE </p>
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
                                                        <p> LEGAL PRESENTATIONS </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardQuickPresentations'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> QUICK PRESENTATIONS </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardTrialExhibits'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> TRIAL EXHIBITS </p>
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
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
                        <p> One-stop-shop to solve all your presentation problems and headaches. </p>
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
                                                        <p> INVESTOR DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardStartupPitch'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> BUSINESS PROPOSAL <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardCompanyPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> COMPANY PRESENTATION <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardProductPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> SALES DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardServiceDeck'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> BIG NEWS DECK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBrandedTemplate'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> BRANDED TEMPLATE <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBoardingPresentation'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> POLICY DECK & PLAYBOOK <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardProgressReport'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> 1 PAGER INTRO <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardAgency'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> AGENCY <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardBranding'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> CORPORATE TRAINING <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardRedesign'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> REDESIGN <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardReview'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> MAGAZINE <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardProgressReport1'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> PROGRESS REPORT <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardConference'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
                                                        <p> LEGAL PRESENTATIONS <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                            <div className='card cardQuickPresentations'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
                                                        <p> QUICK PRESENTATIONS <span className='textHover'> → </span> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-sm-3 col-xl-3 col-lg-12 col-md-12'>
                                        <div className='card cardTrialExhibits'>
                                                <div className='card-body'>
                                                    <div className='card-text'>
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
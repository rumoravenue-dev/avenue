import $ from 'jquery';
import style from './styles/presentation.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Presentation = () => {
    $(document).on('click', 'a', function() {
        $(this).addClass('actived')
    })
    
    return (
        <>
            <section className="presentationServices containter-fluid">
                <div className="row presentationMainRow">
                    <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                        <Tab.Container defaultActiveKey="timezones">
                            <Row>
                                <Col sm={6}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="presentationtypes"> PRESENTATION TYPES </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="timezones"> TIMEZONES </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="filetypes"> FILE TYPES </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="etc"> ETC </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={5}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="presentationtypes">
                                        <p> Need to present your work? We excel in various presentation visuals, from investor decks to reports to business proposals. We got you covered. Take a look below for a full list of our services. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="timezones" className="timezones">
                                        <p> We are open to work in all time zones. We’re here for you, whether it is 5pm where you’re living or not. Our policy is all hands on deck, all the time. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="filetypes" className="presentationFileTypes">
                                        <p> We share them as: </p>
                                        <ul>
                                            <li>
                                                <h5> <img src='/assets/img/presentation/powerpoint.svg'/> PowerPoint Presentation (.pptx) </h5>
                                            </li>
                                            <li>
                                                <h5> <img src='/assets/img/presentation/powerpoint.svg'/> PowerPoint 97-2003 Presentation (.ppt) </h5>
                                            </li>
                                            <li>
                                                <h5> <img src='/assets/img/presentation/adobe.svg'/> PDF Document Format (.pdf) </h5>
                                            </li>
                                        </ul>
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

export default Presentation;
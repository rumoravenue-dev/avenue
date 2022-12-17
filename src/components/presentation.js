import style from './styles/presentation.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Presentation = () => {zz
    return (
        <>
            <section className="presentationServices containter-fluid">
                <div className="row presentationMainRow">
                    <div className="col-12 col-sm-12 col-xl-12 col-lg-12 col-md-12">
                        <Tab.Container defaultActiveKey="presentationtypes">
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
                                        <p> We use our presentations to tell stories. Whether you’re looking to raise funds, sell a product, or hire and manage people, we’ve got you covered. Join us so we can tell a magical story together. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="timezones">
                                        <p> We use our presentations to tell stories. Whether you’re looking to raise funds, sell a product, or hire and manage people, we’ve got you covered. Join us so we can tell a magical story together. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="filetypes">
                                        <p> We use our presentations to tell stories. Whether you’re looking to raise funds, sell a product, or hire and manage people, we’ve got you covered. Join us so we can tell a magical story together. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="etc">
                                        <p> We use our presentations to tell stories. Whether you’re looking to raise funds, sell a product, or hire and manage people, we’ve got you covered. Join us so we can tell a magical story together. </p>
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
import React, { useState } from 'react';
import style from './styles/presentation.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Presentation = () => {

    const key = [1,2,3,4]

    const [presentationtypes, setPresentationtypes] = useState(false);
    const [timezones, setTimezones] = useState(false)
    const [filetypes, setFiletypes] = useState(false)
    const [etc, setEtc] = useState(false)
    

    const navClick = (number) => {
        console.log(number)
        if(number === 1 ) {
            setPresentationtypes(true)
            setTimezones(false)
            setFiletypes(false)
            setEtc(false)
        } else 
        if(number === 2  ) {
            setTimezones(true)
            setPresentationtypes(false)
            setFiletypes(false)
            setEtc(false)
        } else 
        if(number === 3 ) {
            setFiletypes(true)
            setPresentationtypes(false)
            setTimezones(false)
            setEtc(false)
        } else 
        if(number === 4 ) {
            setEtc(true)
            setPresentationtypes(false)
            setTimezones(false)
            setFiletypes(false)
        }
    }


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
                                    <Nav.Link eventKey="presentationtypes" onClick={()=>navClick(key[0])} className={presentationtypes ? "ativo" : "inativo"}> PRESENTATION TYPES </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="timezones" onClick={()=>navClick(key[1])} className={timezones ? "ativo" : "inativo"}> TIMEZONES </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="filetypes" onClick={()=>navClick(key[2])} className={filetypes ? "ativo" : "inativo"}> FILE TYPES </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="etc" onClick={()=>navClick(key[3])} className={etc ? "ativo" : "inativo"}> ETC </Nav.Link>
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
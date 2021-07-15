import React, { useState } from 'react'


import {Form,Col,Row, Button, Modal, Card  } from 'react-bootstrap';




import {MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import { getDetails } from '../../actions/ThemeAction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ThemeCard = ({Theme}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date());

    const dispatch = useDispatch()
    return (
        <div>
            <MDBCard style={{ maxWidth: '900px', marginLeft:"20%", height:"350px" }}>
        <MDBRow className='g-0'>
            
            <MDBCol md='6' >
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }}  src={Theme.images} alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='6'>
            <MDBCardBody>
                <MDBCardTitle >{Theme.title}</MDBCardTitle>
                <MDBCardText>
                {Theme.desc}
                
                </MDBCardText>
                <MDBCardText>
                {Theme.prix}
                </MDBCardText>
                <MDBCardText>
                {Theme.nbrPersonne}
                </MDBCardText>
                



                                <Button variant="primary" onClick={handleShow}>
                                Réserver
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Choisir votre date</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label style={{color:"MediumBlue"}} column sm="2">
                Date
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="jj/mm/aaaa"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label style={{color:"MediumBlue"}} column sm="2">
                Heure
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Heure de votre événement (exp: 18h)" />
                </Col>
            </Form.Group>
            </Form>
                                </div>              
                        </Modal.Body>
                        
                        <Modal.Footer>
                        <Button variant="light" onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button  variant="success" onClick={handleClose}>
                        Sauvegarder
                        </Button>
                        </Modal.Footer>
                    </Modal>
                

            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>

        <br></br>
        <br></br>
        <br></br>

        

        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}

export default ThemeCard

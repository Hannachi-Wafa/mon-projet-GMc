import React, { useState } from 'react'



import {Form,Col,Row, Button, Modal, Card  } from 'react-bootstrap';




import {MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import { getDetails } from '../actions/ThemeAction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Swal from 'sweetalert2'

const ThemeCard = ({Theme}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date());

    const dispatch = useDispatch()

    const opensweetalert=()=>
        {
            Swal.fire({
            title: 'Merci !',
            text: "on va confermer votre reservation trés bientot",
            type: 'success',
            
            })
        }
    
    return (
        <div>
            
            <MDBCard style={{ maxWidth: '900px', marginLeft:"20%", height:"350px", marginTop:"5%" }}>
        <MDBRow className='g-0'>
            
            <MDBCol md='6' >
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }}  src={Theme.images} alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='6'>
            <MDBCardBody>
                <MDBCardTitle >
                <span style={{color:"blue"}}>Théme :</span>

                    {Theme.title}
                    </MDBCardTitle>
                {/* <MDBCardText>
                <span style={{color:"blue"}}>Description :</span>
                {Theme.desc}
                
                </MDBCardText>
                <MDBCardText>
                <span style={{color:"blue"}}>Prix :</span> 
                {Theme.prix}
                </MDBCardText>
                <MDBCardText>
                <span style={{color:"blue"}}>Nombre de personne :</span>
                {Theme.nbrPersonne}
                </MDBCardText> */}

                <Button variant="info"
                onClick={()=> dispatch(getDetails(Theme._id))}>
                <Link to={{pathname:`/theme/${Theme._id}`}}> Détails </Link></Button>

                {/* <button
                onClick={()=> dispatch(getDetails(Theme._id))} 
                type="button" className="btn btn-light btn-sm mr-1 mb-3">
                <i className="fas fa-info-circle pr-2" />
                <Link to={{pathname:`/themes/${Theme._id}`}}> details </Link>
                </button> */}
                



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
                        <Button  variant="success" onClick={handleClose} onClick={opensweetalert} >
                        Réserver
                        </Button>
                        
                        
                        </Modal.Footer>
                    </Modal>
                

            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>

        
        
        </div>
    )
}

export default ThemeCard

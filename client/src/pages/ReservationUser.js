import React, { useState } from 'react'

import {Form,Col,Row, Button, Modal, Card  } from 'react-bootstrap';

import {MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import { getDetails } from '../actions/ThemeAction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Swal from 'sweetalert2'

const ReservationUser = ({Theme}) => {
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
            <br></br>
            <br></br>
            <br></br>
            <div style={{display:'flex', flexDirection:'row'}}>
            <h1 style={{marginLeft:'30%', marginTop:'4%'}}>Mes réservation</h1>
            <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Totale</MDBCardTitle>
          <MDBCardText>
            la somme ici
          </MDBCardText>
          <MDBBtn href="#">confermer</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol></div>
    <hr></hr>


            <MDBCard style={{ maxWidth: '900px', marginLeft:"20%", height:"350px", marginTop:"3%" }}>
        <MDBRow className='g-0'>
            
            <MDBCol md='6' >
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }}  src='http://viamyli.com/img/produits/3/2391/3142/2391.jpg' alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='6'>
            <MDBCardBody>
                <MDBCardTitle >title</MDBCardTitle>
                <MDBCardText>
                desc
                
                </MDBCardText>
                <MDBCardText>
                prix
                </MDBCardText>
                <MDBCardText>
                nbrPersonne
                </MDBCardText>
                



                                
                    <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label style={{color:"MediumBlue"}} column sm="2">
                Date
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder=""/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label style={{color:"MediumBlue"}} column sm="2">
                Heure
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="" />
                </Col>
            </Form.Group>
            </Form>
                    
            <Button variant="danger" onClick={handleShow}>
                                Annuler
                    </Button>
                    <Button variant="warning">Modifier date/ heure</Button>
                    

            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>

        <br></br>
        <br></br>
        <br></br>

        </div>
    )
}

export default ReservationUser

import React, { useState } from 'react'


import {Form,Col,Row, Button, Modal, Card  } from 'react-bootstrap';




import {MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';







const ThemeModel = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date());

    

    return (
        <div>
                <MDBCard style={{ maxWidth: '900px', marginLeft:"20%", height:"350px" }}>
        <MDBRow className='g-0'>
            
            <MDBCol md='6' >
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }}  src='https://www.atelier-camus.com/images/prestation/fleur-mariage.jpg' alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='6'>
            <MDBCardBody>
                <MDBCardTitle >Théme chic en blanc</MDBCardTitle>
                <MDBCardText>
                Table et chaises en blanc
                <br></br>
                Fleur en blanc
                </MDBCardText>
                <MDBCardText>
                Prix 500 dt
                </MDBCardText>
                <MDBCardText>
                Pour 60 personnes
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

export default ThemeModel

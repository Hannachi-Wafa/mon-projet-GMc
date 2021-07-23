import React, { useState } from 'react'

/* import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

import Animate from 'animate.css-react'
 
import 'animate.css/animate.css' */

import {Form,Col,Row, Button, Modal, Card ,Alert } from 'react-bootstrap';

import {MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

import { getDetails,deleteTheme } from '../../actions/ThemeAction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import UpdateTheme from './UpdateTheme'

const ThemeCard = ({Theme}) => {
    
    const [show, setShow] = useState(false);
/*     const [shows, setShows] = useState(true); */
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [startDate, setStartDate] = useState(new Date());

    const dispatch = useDispatch()
    return (
        <div>
            <MDBCard style={{ width: '1400px', marginLeft:"3%", height:"350px", marginRight:'-10%' }}>
        <MDBRow className='g-0' style={{ width: '1400px', height:"350px", marginRight:'-20%' }}>
            
            <MDBCol md='6' >
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }}  src={Theme.images} alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='5'>
            <MDBCardBody style={{ width: '1000px', marginLeft:"-40%", height:"350px" }}>
                <MDBCardTitle > <span style={{color:"blue"}}>Théme :</span>
                    {Theme.title}</MDBCardTitle>
                <MDBCardText> <span style={{color:"blue"}}>Description :</span>
                {Theme.desc}
                
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>Prix :</span> 
                {Theme.prix}
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>Nombre de personne :</span> 
                {Theme.nbrPersonne}
                </MDBCardText>
                



                                <div style={{display:"flex", flexDirection:"row"}}>
                    {/* <Button variant="info">Modifier</Button> */}
                    <UpdateTheme Theme={Theme}  className="btn btn-primary btn-sm mr-1 mb-3"/><i className="fas pr-2" />

                    <Button  onClick={() => dispatch(deleteTheme(Theme._id))}
                    variant="danger" >Supprimer</Button> 

{/* <Alert variant="danger" onClose={() => setShows(false)} dismissible>
        <Alert.Heading>Oh oups! You supp!</Alert.Heading>
        <p>
          supp 
        </p>
      </Alert> */}
                    </div>

                    
                

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

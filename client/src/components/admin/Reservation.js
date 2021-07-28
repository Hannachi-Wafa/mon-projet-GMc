import React, { useState } from 'react'

/* import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

import Animate from 'animate.css-react'

import 'animate.css/animate.css' */

import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import {Form,Col,Row, Button, Modal, Card , Alert, Select } from 'react-bootstrap';

import {MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

import { getDetails,deleteTheme } from '../../actions/ThemeAction'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import UpdateTheme from './UpdateTheme'

const Reservation = () => {
    
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
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }} src='https://previews.123rf.com/images/iancucristi/iancucristi1508/iancucristi150800100/44340105-d%C3%A9coration-de-mariage-sur-la-table-arrangements-et-d%C3%A9coration-florale-arrangement-de-fleurs-roses-et-bla.jpg'  alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='5'>
            <MDBCardBody style={{ width: '1000px', marginLeft:"-40%", height:"350px" }}>
                <MDBCardTitle > <span style={{color:"blue"}}>Théme :</span>
                    </MDBCardTitle>
                <MDBCardText> <span style={{color:"blue"}}>Description :</span>
                
                
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>Prix :</span> 
                
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>Nombre de personne :</span> 
                
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>User :</span> 
                
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>Date  :</span> 
                
                </MDBCardText>
                <MDBCardText> <span style={{color:"blue"}}>Heure :</span> 
                
                </MDBCardText>
                



                                <div style={{display:"flex", flexDirection:"row"}}>
                    {/* <Button variant="info">Modifier</Button> */}
                    

                    
                    <h4 style={{marginTop:'10px', colr:'black'}}>Etat</h4>

                            <MDBDropdown>
                <MDBDropdownToggle>En attente</MDBDropdownToggle>
                <MDBDropdownMenu>
                
                <MDBDropdownItem>
                    <MDBDropdownLink tag='button' type='button'>
                    Confirmer
                    </MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                    <MDBDropdownLink tag='button' type='button'>
                    Annuler
                    </MDBDropdownLink>
                </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
                    

            <Button  variant="danger" >Supprimer</Button> 

<Button variant="info">Modifier</Button>
                
                
                    
<br>
</br>
<br>
</br>
                    
                    

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

export default Reservation





    

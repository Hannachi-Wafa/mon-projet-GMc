import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const ThemeModel = () => {
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
                <MDBBtn rounded className='mx-2' color='info'>
                    Réserver
                </MDBBtn>
            </MDBCardBody>
            </MDBCol>
        </MDBRow>
        </MDBCard>

        <br></br>
        <br></br>
        <br></br>

        <MDBCard style={{ maxWidth: '900px', marginLeft:"20%", height:"350px" }}>
        <MDBRow className='g-0'>
            
            <MDBCol md='6' >
            <MDBCardImage style={{ height:"350px", maxWidth: '450px' }}  src='https://archzine.fr/wp-content/uploads/2016/12/mariage-retro-chic-rubans-roses-d%C3%A9coration-simple-et-douce-e1482146183748.jpg' alt='...' fluid />
            </MDBCol>
            
            <MDBCol md='6'>
            <MDBCardBody>
                <MDBCardTitle>Théme chic en rose</MDBCardTitle>
                <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
                </MDBCardText>
                <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardText>
                <MDBBtn rounded className='mx-2' color='info'>
                    Réserver
                </MDBBtn>
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

export default ThemeModel

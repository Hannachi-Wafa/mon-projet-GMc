import React from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';


const Slide = () => {
    return (
        <div>
                <MDBCarousel showIndicators showControls style={{zIndex: '0'}}>
        <MDBCarouselInner style={{width:"1200px",height:"600px",marginLeft:"80px",marginRight:"-80px", marginTop:"-20px"}}>
            <MDBCarouselItem itemId={1} style={{width:"1200px",maxHeight:"600px"}}>
            <MDBCarouselElement src="/images/widd.jpg" alt="" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
            <MDBCarouselElement src='/images/babyshower.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
            <MDBCarouselElement src='/images/dobeB.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={0}>
            <MDBCarouselElement src='https://static.vecteezy.com/system/resources/previews/002/374/904/non_2x/happy-birthday-or-party-background-free-photo.jpg' alt='...' />
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>

        </div>
    )
}

export default Slide

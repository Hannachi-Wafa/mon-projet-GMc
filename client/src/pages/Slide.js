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
                <MDBCarousel showIndicators showControls>
        <MDBCarouselInner style={{width:"1200px",height:"800px",marginLeft:"80px",marginRight:"-80px"}}>
            <MDBCarouselItem itemId={0} style={{width:"1200px",maxHeight:"600px"}}>
            <MDBCarouselElement src="/images/widd.jpg" alt="" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={1}>
            <MDBCarouselElement src='/images/babyshower.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
            <MDBCarouselElement src='/images/dobeB.jpg' alt='...' />
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
    )
}

export default Slide

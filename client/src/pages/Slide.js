import React from 'react'
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';
import './Slide.css'

const Slide = () => {
    return (
        <div className="Slider" style={{marginTop:"-15px"}}>
                <MDBCarousel showIndicators showControls style={{zIndex: '0'}} 
  className="slide" >

        <MDBCarouselInner  className="slide" style={{height:"580px"}}>
            <MDBCarouselItem  itemId={1} className="slide" >

            <MDBCarouselElement className="slide" src="/images/widd.jpg" alt="" />
            </MDBCarouselItem>
           
            <MDBCarouselItem itemId={2} className="slide">
            <MDBCarouselElement className="slide" src='/images/babyshower.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3} className="slide">
            <MDBCarouselElement className="slide" src='/images/dobeB.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={0} className="slide">
            <MDBCarouselElement className="slide" src='https://static.vecteezy.com/system/resources/previews/002/374/904/non_2x/happy-birthday-or-party-background-free-photo.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={4} className="slide">
            <MDBCarouselElement className="slide" src='https://www.savethedeco.com/c/259-cover/evjf-enterrement-de-vie-de-jeune-fille.jpg' alt='...' />
            </MDBCarouselItem>
            <MDBCarouselItem  itemId={5} className="slide" >
            <MDBCarouselElement className="slide" src="https://www.savethedeco.com/c/46-cover/anniversaire-enfant.jpg" alt="" />
            </MDBCarouselItem>
        </MDBCarouselInner>
        </MDBCarousel>

        </div>
    )
}

export default Slide

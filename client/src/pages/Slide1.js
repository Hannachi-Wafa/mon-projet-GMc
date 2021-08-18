import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import { Carousel } from 'mdb-ui-kit';

const Slide1 = () => {
  return (
    <div id="carouselExampleInterval" className="carousel  slide" data-mdb-ride="carousel" style={{height:"580px" , marginTop:"-15px"}}>
    <div className="carousel-inner">
      <div className="carousel-item active" data-mdb-interval={4000}>
        <img src="/images/widd.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-mdb-interval={4000}>
        <img src='/images/babyshower.jpg' className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-mdb-interval={4000}>
        <img src='/images/dobeB.jpg' className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-mdb-interval={4000}>
        <img src="https://static.vecteezy.com/system/resources/previews/002/374/904/non_2x/happy-birthday-or-party-background-free-photo.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-mdb-interval={4000}>
        <img src="https://www.savethedeco.com/c/259-cover/evjf-enterrement-de-vie-de-jeune-fille.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-mdb-interval={4000}>
        <img src="https://www.savethedeco.com/c/46-cover/anniversaire-enfant.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Slide1;

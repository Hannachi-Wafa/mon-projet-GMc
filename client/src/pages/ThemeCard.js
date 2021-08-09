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
        
            
            




<div className="col-lg-5 col-md-5 mb-6" style={{marginLeft:"5%"}} >

    <br></br>
    <br></br>

                <div style={{marginLeft:"15%"}} >
              <div className="view zoom overlay z-depth-2 rounded" style={{width:'550px', height:'350px'}}>
                <img className="img-fluid w-100" src={Theme.images} alt="Sample" />
                <a href="#!">
                  <div className="mask"  >
                    <img className="img-fluid w-100" src={Theme.images} />
                    <div className="mask rgba-black-slight" />
                  </div>
                </a>
              </div>
              <div className="text-center pt-4" style={{marginLeft:"30%"}}>
                <h3 style={{color:'rgb(233, 30, 99)'}}>{Theme.title}</h3>
                <p className="mb-2 text-muted text-uppercase small">{Theme.category_id.name}</p>
            
                
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                <h6 className="mb-3">{Theme.prix}TND</h6>
                
                  </div>
                  <div style={{display:"flex" , justifyContent:"space-around"}}>
                  <Button variant="info" style={{marginLeft:"7%"}}
                onClick={()=> dispatch(getDetails(Theme._id))}>
                <Link to={{pathname:`/theme/${Theme._id}`}}> Détails
                 </Link></Button>
                 
                 

                    
                

                {/* <button type="button" className="btn btn-primary btn-sm mr-1 mb-3">
                  <i className="fas fa-shopping-cart pr-2" />ajouter au panier</button>
                
                
                <button onClick={()=> dispatch(getDetails(product._id))}
                type="button" className="btn btn-light btn-sm mr-1 mb-3">
                  <i className="fas fa-info-circle pr-2" />
                  <Link to={{pathname:`/products/${product._id}`}}> details </Link> </button> */}
                </div>
                <hr style={{marginLeft:"8%"}} ></hr>
              </div>
              
            </div>
            




                        
        
        
        </div>
    )
}

export default ThemeCard

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
        <div className="col-lg-6 col-md-3 mb-2"  >


        <div >
      <div className="view zoom overlay z-depth-2 rounded" style={{width:'550px', height:'350px'}}>
        <img className="img-fluid w-100" src={Theme.images} alt="Sample" />
        <a href="#!">
          <div className="mask"  >
            <img className="img-fluid w-100" src={Theme.images} />
            <div className="mask rgba-black-slight" />
          </div>
        </a>
      </div>
      <div className="text-center pt-4" >
        <h3 style={{color:'rgb(233, 30, 99)'}}>{Theme.title}</h3>
        <p className="mb-2 text-muted text-uppercase small">{Theme.category_id.name}</p>
    
        
        <div style={{display:"flex" , justifyContent:"space-around"}}>
        <h6 className="mb-3">{Theme.prix}TND</h6>
        
          </div>
                



                   {/*              <div style={{display:"flex", flexDirection:"row"}}>
                    <UpdateTheme Theme={Theme}  className="btn btn-primary btn-sm mr-1 mb-3"/><i className="fas pr-2" />

                    <Button  onClick={() => dispatch(deleteTheme(Theme._id))}
                    variant="danger" >Supprimer</Button> 
                    </div> */}
                       <div style={{display:"inline-flex"}}>
               {/*<button  onClick={()=> dispatch(updateproduct(product._id))}  type="button" className="btn btn-primary btn-sm mr-1 mb-3"><i className="fas pr-2" /><Link to={{pathname:`/products/${product._id}`}}>modifier</Link></button>*/}
<UpdateTheme Theme={Theme}  className="btn btn-primary btn-sm mr-1 mb-3" /><i className="fas pr-2" />
            <button onClick={() => dispatch(deleteTheme(Theme._id))} type="button" className="text-danger btn btn-light btn-sm mr-2 mb-2"><i className="fas fa-info-circle pr-2" /> suprimer  </button>
                </div>
                    
                


        <br></br>
        <br></br>
        <br></br>

        

        <br></br>
        <br></br>
        <br></br>
        </div>
        </div>
        </div>

    )
}

export default ThemeCard

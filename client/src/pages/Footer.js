import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
                <MDBFooter color="pink" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
            <MDBCol md="4">
                <h5 className="title">Contact</h5>
                <p>
                all-Deco-Events@gmail.com
                </p>
                <p>31 21 11 100</p>
                <p>Où nous trouver</p>
            </MDBCol>
            <MDBCol md="4">
                <h5 className="title">Produits</h5>
                <ul>
                <li className="list-unstyled">
                    <Link to={{pathname:'/products',state:{filter:'mariage'}}}>Produits mariage</Link>
                </li>
                <li className="list-unstyled">
                <Link to={{pathname:'/products',state:{filter:'anniversaire'}}}>Produits anniversaire</Link>
                </li>
                <li className="list-unstyled">
                <Link to={{pathname:'/products',state:{filter:'baby shower'}}}>Produits baby shower</Link>
                </li>
                <li className="list-unstyled">
                    <a href="/card">Panier</a>
                </li>
                </ul>
            </MDBCol>
            <MDBCol md="4">
            <h5 className="title">Evenements</h5>
                <ul>
                <li className="list-unstyled">
                    <Link to={{pathname:'/pages/ImagesBTN' ,state:{filter:'mariage'}}}>Théme mariage</Link>
                </li>
                <li className="list-unstyled">
                <Link to={{pathname:'/pages/ImagesBTN',state:{filter:'anniversaire'}}}>Théme anniversaire</Link>
                </li>
                <li className="list-unstyled">
                <Link to={{pathname:'/pages/ImagesBTN',state:{filter:'baby shower'}}}>Théme baby shower</Link>
                </li>
                <li className="list-unstyled">
                    <a href="/reservrationUser">Réservation</a>
                </li>
                </ul>
            </MDBCol>
           
            </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href=""> all-Deco-Events.com </a>
            </MDBContainer>
        </div>
        </MDBFooter>
        </div>
    )
}

export default Footer

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
                    <a href="#!">Produits mariage</a>
                </li>
                <li className="list-unstyled">
                    <a href="#!">Produits anniversaire</a>
                </li>
                <li className="list-unstyled">
                    <a href="#!">Produits baby shower</a>
                </li>
                <li className="list-unstyled">
                    <a href="#!">Panier</a>
                </li>
                </ul>
            </MDBCol>
            <MDBCol md="4">
                <h5 className="title">Evenements</h5>
                <ul>
                <li className="list-unstyled">
                    <a href="#!">Théme mariage</a>
                </li>
                <li className="list-unstyled">
                    <a href="#!">Théme anniversaire</a>
                </li>
                <li className="list-unstyled">
                    <a href="#!">Théme baby shower</a>
                </li>
                <li className="list-unstyled">
                    <a href="#!">Réservation</a>
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

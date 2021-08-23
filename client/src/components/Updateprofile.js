import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button ,Form,Dropdown,DropdownButton} from 'react-bootstrap';
import FormControl from "react-bootstrap/FormControl";
import { MDBContainer, MDBBtn, MDBInput } from "mdbreact";
import  {  updateUser } from "../actions/authActions"
import axios from 'axios';

const Updateprofile = ({user}) => {

  const dispatch = useDispatch()
 

 const [input, setInput] = useState(user);

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  

const handleSubmit = () => {
 dispatch(updateUser(input, input._id));
 handleClose();

};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      modifie </Button >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form.Label>nom et prénom</Form.Label>
           <FormControl
            name="fullname"
            type="text"
            onChange={handleChange}
            value={input.fullname}

          ></FormControl>



<Form.Label>Email</Form.Label>
           <FormControl
            name="email"
            type="text"
            onChange={handleChange}
            value={input.email}

          ></FormControl>

<Form.Label>mot de passe</Form.Label>
           <FormControl
            name="password"
            type="password"

            onChange={handleChange}

></FormControl>



          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            enregistré
            
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
    
}

export default Updateprofile

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button ,Form,Dropdown,DropdownButton} from 'react-bootstrap';
import FormControl from "react-bootstrap/FormControl";
import { MDBContainer, MDBBtn, MDBInput } from "mdbreact";
import  { getCategory } from "../../actions/CategoryAction"
import  {updateimage, updateproduct } from "../../actions/ProductAction"
import axios from 'axios';
const Updateproduct = ({product}) => {
  const category = useSelector((state) => state.categoryReducer.category);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const [categorieFilter, setCategorieFilter] = useState("");
  const [input, setInput] = useState(product);
  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
  const [file, setfile] = useState()
  const handleUpload= (e) => {
    setfile(e.target.files[0]);
 
};
const handleSubmit = () => {
 dispatch(updateproduct(input,file,input._id));
 //dispatch(updateimage(file));

 handleClose();

};

const [selectedItem, setSelectedItem] = useState("Choose category");
const handleSelectCategory = (e) => {
  setInput({ ...input, category_id: e.target.id});
  setSelectedItem(e.target.text);
};
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      modifie</Button >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form.Label>titre</Form.Label>
           <FormControl
            name="title"
            type="text"
            onChange={handleChange}
            value={input.title}

          ></FormControl>

<Form.Label>prix</Form.Label>
           <FormControl
            name="price"
            type="number"
            onChange={handleChange}
            value={input.price}


          ></FormControl>

<Form.Label>description</Form.Label>
           <FormControl
            name="description"
            type="text"
            onChange={handleChange}
            value={input.description}

          ></FormControl>

<Form.Label>image</Form.Label>
           <FormControl
            name="images"
            id='images'
            type="file"
            onChange={handleUpload}
></FormControl>

<Form.Label>categorie</Form.Label>
<Form.Group>
              <DropdownButton id="dropdown-basic-button" title={selectedItem}>
             
                {category.map(
                  (el) =>
                    el.name
                      .toUpperCase()
                      .trim()
                      .includes(categorieFilter.toUpperCase().trim()) && (
                      <Dropdown.Item
                        id={el._id}
                        name="category_id"
                        value={el.category_id}
                        onClick={handleSelectCategory}
                      >
                        {el.name}
                

                      </Dropdown.Item>
                    )
                )}

              </DropdownButton>
            </Form.Group>

<Form.Label>quantit??</Form.Label>
           <FormControl
            name="qteStock"
            type="number"
            onChange={handleChange}
            value={input.qteStock}

          ></FormControl>


          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            enregistr??
            
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
 

export default Updateproduct

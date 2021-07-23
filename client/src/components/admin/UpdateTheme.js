import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button ,Form,Dropdown,DropdownButton} from 'react-bootstrap';
import FormControl from "react-bootstrap/FormControl";
import { MDBContainer, MDBBtn, MDBInput } from "mdbreact";
import  { getCategory } from "../../actions/CategoryAction"
import  {updateTheme } from "../../actions/ThemeAction"
import axios from 'axios';


const UpdateTheme = ({Theme}) => {

    const category = useSelector((state) => state.categoryReducer.category);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const [categorieFilter, setCategorieFilter] = useState("");
  const [input, setInput] = useState(Theme);
  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
  const [file, setfile] = useState()
  const handleUpload= (e) => {
    setfile(e.target.files[0]);
 
};
const handleSubmit = () => {
 dispatch(updateTheme(input,file,input._id));
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
        <div>
            <Button variant="primary" onClick={handleShow}>
      Modifier</Button >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Theme</Modal.Title>
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
            name="prix"
            type="text"
            onChange={handleChange}
            value={input.prix}


          ></FormControl>

<Form.Label>description</Form.Label>
          <FormControl
            name="desc"
            type="text"
            onChange={handleChange}
            value={input.desc}

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

            <Form.Label>Nombre de personne</Form.Label>
          <FormControl
            name="nbrPersonne"
            type="text"
            onChange={handleChange}
            value={input.nbrPersonne}

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
        </div>
    )
}

export default UpdateTheme

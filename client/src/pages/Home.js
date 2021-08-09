import React, { useEffect, useState } from 'react'
import Products from './Products'
import AboutUs from './AboutUs';
import NousTrouver from './NousTrouver';
import Services from './Services'
import SuivezNous from './SuivezNous';
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getCategory } from '../actions/CategoryAction';
import './Home.css'
const Home=()=> {
  
    const category = useSelector((state) => state.categoryReducer.category);
    const [selectedItem, setSelectedItem] = useState("Les produits");
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCategory());

    }, [dispatch]);
    const handleSelectCategory = (e) => {
        console.log(e.target.text)
        setSelectedItem(e.target.text);
      };
    return (
        <div>
            {/*id="dropdown-basic-button"*/}
            <br></br>
        <Slide></Slide> 
        <hr></hr>
            <DropdownButton className="dropdown"     id="dropdown-basic-button" title={selectedItem}  >
                <Dropdown.Item 
                value=""
                onClick={handleSelectCategory}>
                    Les produits
                </Dropdown.Item>
                {category.map(
                (el) =>
(
                    <Dropdown.Item
                        id={el._id}
                        name="category_id"
                        onClick={handleSelectCategory}
                        value={el.name}
                    >
                        {el.name}
                    </Dropdown.Item>
                    )
                )}
            </DropdownButton>
       

        
        <Products filter={selectedItem}></Products>

        <br></br>
        {/* <Services></Services> */}
        <hr></hr>
        
    <br></br>
        <AboutUs></AboutUs>
            <br></br>
            <br></br>
            <hr></hr>
            
            <NousTrouver></NousTrouver>
            <br></br>
            <br></br>
            <hr></hr>
            
            <Services></Services>
            <br></br>
            <br></br>
            <hr></hr>
            <SuivezNous></SuivezNous>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home

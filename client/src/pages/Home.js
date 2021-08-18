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
import Theme from './Theme';
const Home=()=> {
  
    const category = useSelector((state) => state.categoryReducer.category);
    const [selectedItem, setSelectedItem] = useState("Les produits");
    const [selectedItem1, setSelectedItem1] = useState("Les événements");

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCategory());

    }, [dispatch]);
    const handleSelectCategory = (e) => {
        console.log(e.target.text)
        setSelectedItem(e.target.text);

      };
      const handleSelectCategory1 = (e) => {
        console.log(e.target.text)
        setSelectedItem1(e.target.text);

      };
    return (
        <div>
        
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
       
            <DropdownButton id="dropdown-basic-button" title={selectedItem1}>
            <Dropdown.Item 
                value=""
                onClick={handleSelectCategory1}>
                Les événements
                </Dropdown.Item>
                {category.map(
                (el) =>
                    (
                    <Dropdown.Item
                        id={el._id}
                        name="category_id"
                        onClick={handleSelectCategory1}
                    >
                        {el.name}
                    </Dropdown.Item>
                    )
                )}
            </DropdownButton>
        
        <Products filter={selectedItem}></Products>
        <Theme filter={selectedItem1}></Theme>


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
            
            {/*<Services></Services>
            <br></br>
            <br></br>
            <hr></hr>*/}
            <SuivezNous></SuivezNous>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home

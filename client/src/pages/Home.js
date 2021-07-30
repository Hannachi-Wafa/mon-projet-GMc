import React, { useState } from 'react'
import Products from './Products'
import AboutUs from './AboutUs';
import NousTrouver from './NousTrouver';
import Services from './Services'
import SuivezNous from './SuivezNous';
import Slide from './Slide';
const Home=()=> {
  
    return (
        <div>
            
        <br></br>
        <Slide></Slide> 
        <hr></hr>

        
        <Products></Products>

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

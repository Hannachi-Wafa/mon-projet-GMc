import React from 'react'
import Addproduct from './Addproduct'
import Products from './Products'

import AddTheme from './AddTheme'
import Theme from './Theme'
import { Tab,Tabs, Sonnet} from 'react-bootstrap';


const ProfileAdmin = () => {
    return (
        <div>
            <h1>ADMIN</h1>
        {/* <div style={{display:'flex'}}>
        <div> <Addproduct></Addproduct></div>
            
        <Products></Products>

        </div> */}


    <Tabs defaultActiveKey="Accueil" transition={false} id="noanim-tab-example">
    <Tab eventKey="Accueil" title="Accueil">
    
      {/* <Sonnet /> */}
    </Tab>
    <Tab eventKey="Produits" title="Produits">
    
      {/* <Sonnet /> */}
        <div style={{display:'flex'}}>
        <div> <Addproduct></Addproduct></div>
            
        <Products></Products>

        </div>
    </Tab>
    
    <Tab eventKey="Les achats" title="Les achats" >
      {/* <Sonnet /> */}
        yuikljhggjkj
    </Tab>
    <Tab eventKey="Theme Evenement" title="Theme Evenement" >
      {/* <Sonnet /> */}

    <div style={{display:'flex'}}>
        <div> <AddTheme></AddTheme></div>
            {/* <Theme></Theme>  */}
          
        

        </div>
    </Tab>
    <Tab eventKey="Reservation" title="Reservation" >
      {/* <Sonnet /> */}
        ukjhgfhjkjhghjklkjhghiuy
    </Tab>
    </Tabs>


        </div>
    )
}

export default ProfileAdmin

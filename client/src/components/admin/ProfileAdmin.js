import React from 'react'
import Addproduct from './Addproduct'
import Products from './Products'

import AddTheme from './AddTheme'
import Theme from './Theme'
import { Tab,Tabs} from 'react-bootstrap';
import Order from './Order'
import Reservation from './Reservation'


const ProfileAdmin = () => {
    return (
         
      

    <Tabs defaultActiveKey="Produits" id="uncontrolled-tab-example" className="mb-4">
    
    <Tab eventKey="Produits" title="Produits">
    
        <div style={{display:'flex'}}>
        <div> <Addproduct></Addproduct></div>
            
        <Products></Products>

        </div>
        <div>
        {/*<Orders />*/}

        </div>
    </Tab>
    
    <Tab eventKey="Les commandes " title="Les commandes" >
    <div><Order></Order></div>
    </Tab>
    <Tab eventKey="Theme Evenement" title="Theme Evenement" >
      {/* <Sonnet /> */}

    <div style={{display:'flex'}}>
        <div> <AddTheme></AddTheme></div>
            <Theme></Theme>  
          
        

        </div>
    </Tab>
    <Tab eventKey="Reservation" title="Reservation" >
      {/* <Sonnet /> */}
      <h3>
        Les réservations</h3>
        <br></br>
        <br></br>
        <div style={{display:'flex'}}>
        <div> <Reservation></Reservation></div>
            
        
        

        </div>
    </Tab>
    </Tabs>


    )
}

export default ProfileAdmin

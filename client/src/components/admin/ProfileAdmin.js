import React from 'react'
import Addproduct from './Addproduct'
import Products from './Products'

import AddTheme from './AddTheme'
import Theme from './Theme'
import { Tab,Tabs, Sonnet} from 'react-bootstrap';
import Reservation from './Reservation'


const ProfileAdmin = () => {
    return (
      <main>
          <div className="container">
            <br></br>
            <br></br>
            
            <h1>ADMIN</h1>
      

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
            <Theme></Theme>  
          
        

        </div>
    </Tab>
    </Tabs>


        </div>
        </main>
    )
}

export default ProfileAdmin

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar1.css';
import { IconContext } from 'react-icons';

import SideTopBar from '../pages/SideTopBar';

import { Button,FormControl, Form,Nav,Navbar} from 'react-bootstrap';

const Navbar1 = () => {
    const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
                <IconContext.Provider value={{ color: 'black' }} >
                
                
            <div className='navbar'>
            
            
            <Link to='#' className='menu-bars'>
            
                <FaIcons.FaBars onClick={showSidebar}  />
                
            </Link>
            <span style={{color:"white"}}> ....</span>
            <Form style={{display:"flex", flexDirection:"row"}}>
        <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
        
        <span className="input-group-text border-0 d-none d-lg-flex"
        ><i className="fas fa-search"></i
        ></span>
        </Form>
        <Nav.Link href="#home" inline style={{display:"flex", flexDirection:"row", marginLeft:"-50px", marginTop:"20px"}}>
            <svg style={{marginTop:"4px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            <span style={{color:"white"}}>..</span>
            <p>Accueil</p>
        </Nav.Link>

        <Nav.Link href="#link" style={{display:"flex", flexDirection:"row", marginLeft:"-95px", marginTop:"20px"}}>
        <svg style={{marginTop:"4px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <span style={{color:"white"}}>..</span>
            <p>Mon compte</p>

        </Nav.Link>


        <Nav.Link href="#link" style={{display:"flex", flexDirection:"row", marginLeft:"-95px", marginTop:"20px"}}>
                <svg style={{marginTop:"4px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
            <span style={{color:"white"}}>..</span>
            <p>Panier</p>

        </Nav.Link>


        <Nav.Link href="#link" style={{display:"flex", flexDirection:"row", marginLeft:"-95px", marginTop:"20px"}}>
                    <svg style={{marginTop:"4px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            </svg>
            <span style={{color:"white"}}>..</span>
            <p>Réservation</p>

        </Nav.Link>


        
            {/* <SideTopBar></SideTopBar> */}
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
                
                </li>
                {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        

                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
        </IconContext.Provider>
        </div>
    )
}

export default Navbar1

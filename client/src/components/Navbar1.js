import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar1.css';
import { IconContext } from 'react-icons';
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/authActions';
import { FormControl, Form, Nav } from 'react-bootstrap';


const Navbar1 = () => {
    const cart = useSelector(state=>state.cartReducer)

const {cartItems}=cart
    const isAuth = useSelector((state) => state.authReducer.isAuth);

    const user = useSelector((state) => state.authReducer.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <IconContext.Provider value={{ color: "rgb(235, 100, 171)" }}  >


                <div className='navbar  fixed-top' style={{zIndex: '1'}}>
                    <Link to='#' className='menu-bars'>

                        <FaIcons.FaBars onClick={showSidebar} />

                    </Link>
                    <img alt='' src='./images/saveTHEdeco.PNG' style={{width:'200px', height:'65px'}}></img>
                    <Form style={{ display: "flex", flexDirection: "row" }}>
                        <FormControl type="text" placeholder="Search" />
                        <span style={{ textDecorationColor: "rgb(235, 100, 171)", width: "200px" }} className="input-group-text border-0 d-none d-lg-flex"
                        ><i className="fas fa-search" ></i
                        ></span>
                    </Form>

                    <Nav.Link href="/" inline style={{ color: "rgb(235, 100, 171)", display: "flex", flexDirection: "row", marginLeft: "-50px", marginTop: "20px" }}>
                        <svg style={{ marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                        <p style={{ color: "white" }}>.</p>
                        <p>Accueil</p>
                    </Nav.Link>



                    <Nav.Link href="card/" style={{ color: "rgb(235, 100, 171)", display: "flex", flexDirection: "row", marginLeft: "-95px", marginTop: "20px" }}>
                 {cartItems.length > 0 && (
                       <span class="badge rounded-pill badge-notification bg-danger">  {cartItems.length}</span>
              )}


                        <svg style={{ marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>

                        <p style={{ color: "white" }}>.</p>
                        <p>Panier</p>
                 
                    </Nav.Link>


                    <Nav.Link href="/reservrationUser" style={{ color: "rgb(235, 100, 171)", display: "flex", flexDirection: "row", marginLeft: "-95px", marginTop: "20px" }}>
                        
                        <svg style={{ marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                        </svg>
                        <p style={{ color: "white" }}>.</p>
                        <p>Réservation</p>

                    </Nav.Link>

                    {isAuth ?
                        (<ul className="navbar-nav">
                            <li className="nav-item dropdown" style={{ display: "flex", color: "rgb(235, 100, 171)", flexDirection: "row", marginLeft: "-95px", marginTop: "20px" }}>

                                <p style={{ color: "rgb(235, 100, 171)" }}
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{ color: "rgb(235, 100, 171)" }}>
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                    {user ? <span> {user.fullname}</span> : <></>}

                                </p>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown " style={{marginLeft: "-60px"}}>
                                {user && user.role!==1?(
                                    <li>
                     
                                        <a className="dropdown-item" href='/Profile'> {user.fullname}</a>
                                    </li>):(<li><a className="dropdown-item" href='/ProfileA'>  {user.fullname}   </a>
                                
                                    </li>)}
                                    {user && user.role==1?(
                                    <li>
                                        <a className="dropdown-item" href='/ProfileAdmin'>Dashboard</a>
                                    </li>):(<li></li>)}
                                    
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="/login" onClick={() => dispatch(logout(history))}>se déconnecté</a>
                                    </li>
                                </ul>


                            </li></ul>) :
                        (<Nav.Link href="/login" style={{ color: "rgb(235, 100, 171)", display: "flex", flexDirection: "row", marginLeft: "-95px", marginTop: "20px" }}>
                            <svg style={{ marginTop: "4px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <p style={{ color: "white" }}>.</p>

                            <p>Mon compte </p>
                        </Nav.Link>)}

                    {/* <SideTopBar></SideTopBar> */}
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                <div >
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{zIndex: '1',marginTop:'3%'}}>
                        <ul className='nav-menu-items list-unstyled' onClick={showSidebar}  >
                        <br></br>
                        <br></br>
                            <li className='navbar-toggle ' >
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>

                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} >
                                            {item.icon}
                                            <span>{item.title}</span>


                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </div>
    )
}


export default Navbar1

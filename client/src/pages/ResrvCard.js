import React, {useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import  {Link} from 'react-router-dom'
import {addToCartReservation,removeFromCartReservation} from '../actions/ReservCardReducer'
import {Form} from "react-bootstrap"


const ResrvCard = ({match, location, history}) => {
    
    const dispatch = useDispatch()
    const themetId=match.params.themeId
    const cart = useSelector(state=>state.cartResrveReducer)

    const {cartItems}=cart
useEffect(() => {
if(themeId){
  dispatch(addToCartReservation(themeId))
}
  
}, [dispatch,themetId])

const removeFromCartHandler=(id)=>{
    dispatch(removeFromCartReservation(id))}
    const checkoutHandler=()=>{
    //history.push('/login?redirect:shipping')
    }
    return (
        <div className="container dark-grey-text mt-5">

                {/*Grid row*/}
            <div className="row">
            {/*Grid column*/}
            <div className="col-lg-8">
                {/* Card */}
                <div className="card wish-list mb-3">
                <div className="card-body">
                    <h5 className="mb-4">Réservation </h5>
                    <hr className="mb-4" />

                {cartItems===0? <p>pas des réservation<Link to='/'> retour </Link></p>:(
                    <div>
                    {cartItems.map( item=>(

                        <div className="row mb-4" key={item.theme}>

                    <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100" src={item.images} alt="Sample" />
                        <a href="#!">
                            <div className="mask waves-effect waves-light">
                            <img className="img-fluid w-100" src={item.images} />
                            <div className="mask rgba-black-slight waves-effect waves-light" />
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-9 col-xl-9">
                        <div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <Link to={`/theme/theme${item.theme}`}> <h5>{item.title}</h5></Link>
                            
                            </div>
                            <div>
                            
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                            <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3" onClick={()=>removeFromCartHandler(item.theme)}><i className="fas fa-trash-alt mr-1" /> Remove item </a>
                            </div>
                            <p className="mb-0"><span><strong>{item.prix_theme }TND</strong></span></p>
                        </div>
                        

                        </div>
                    
                    </div>
                    </div>  ))}                
                    </div>
                    )}
                </div>

                </div>
        
            
            </div>
            
            <div className="col-lg-4">
                {/* Card */}
                <div className="card mb-3">
                <div className="card-body">
                    <h5 className="mb-3"> total</h5>
                    <ul className="list-group list-group-flush">
                
                
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                        <strong> total</strong>
                        
                        </div>
                        <span><strong>{cartItems.reduce((acc,item) => acc+item.price ,0).toFixed(2)}TND </strong></span>
                    </li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-block waves-effect waves-light"
                    disaled={cartItems.length===0} onClick={checkoutHandler}>go to checkout</button>
                </div>
                </div>
            
            </div>
            </div>
            
        </div>
    )
}

export default ResrvCard

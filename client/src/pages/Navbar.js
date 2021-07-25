import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/authActions';
const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);

  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
    return (
        <div>
          <Link to='/'>Home</Link> 
          {isAuth?
           
         (<Link to='/login'  onClick={() => dispatch(logout(history))}>LOGOUT</Link> )
          :
         ( <Link to='/login'>Login</Link>)
          }
          <Link to='/Profile'> {user ? <span> {user.fullname} </span> : <></>} </Link>
          <Link to='/product'>produit</Link> 
           <Link to='/products'>produits</Link> 
          <Link to='/Detailsproduct'>details produit</Link> 
          <Link to='/card'>card</Link> 
          <Link to='/profileAdmin'> {isAdmin ? <span> ADMIN {user.fullname} </span> : <></>} </Link>
        </div>
    )
}

export default Navbar

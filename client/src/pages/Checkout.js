import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/cartAction'
import { Form } from "react-bootstrap"
import { clearOrder, createOrder } from '../actions/orderAction'

import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

const Checkout = ({ match, location, history }) => {
  const productId = match.params.prodId
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer)
  const order = useSelector(state => state.orderReducer)

  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }

  }, [dispatch, productId, qty])


  const [input, setInput] = useState({
    nom: "",
    prénom: "",
    email: "",
    address: "",
    telephone: 0,


  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const orders = {
      ...input,
      total: cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2),
      cartItems:cartItems
    }
    dispatch(createOrder(orders))
    history.push('/');


  };
  const closeModal = () => {
   clearOrder();
  };
  return (


    <div className="container">

      <div className="py-5 text-center">
        <h2>Formulaire de livraison </h2>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">votre panier</span>
          </h4>

          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{item.price * item.qty}TND</span>
              </li>))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total </span>
              <strong onChange={handleChange}>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}TND </strong>
            </li>
          </ul>

        </div>
        <div className="col-md-8 order-md-1">
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">Nom</label>
                <input onChange={handleChange}       
                  name="nom"
                   type="text" 
                   className="form-control"
                    required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Prénom</label>
                <input onChange={handleChange}
                  name="prénom" type="text" className="form-control" required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email </label>
              <input onChange={handleChange} name="email" type="email" className="form-control" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input onChange={handleChange}
                type="text" className="form-control" name="address"  required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Telephone</label>
              <input onChange={handleChange}
                type="number" className="form-control" name="telephone" required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <hr className="mb-4" />
            <h4 className="mb-3" style={{ textAlign: "center" }}>Paiement à la livraison</h4>

            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>COMMANDER</button>
          </form>
        </div>
      </div>
     
    </div>
  )
}

export default Checkout

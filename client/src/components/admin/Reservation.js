import React, { Component, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchOrdersReserve } from "../../actions/OrdrerReserveAction";

const Reservation = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchOrdersReserve())
        }
    , [])

    const ordersReserve = useSelector(state => state.orderReducer.orders)

    
    


        
        
    return (
            <div className="container" style={{marginLeft:"10px"}}>
            
            <table className="table" style={{textAlign:"center"}}>
            <thead>
                <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Telephone</th>

                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>THEME</th>
                </tr>
            </thead>
            <tbody>
                 {/* {ordersReserve && ordersReserve.map((order) => (
                <tr>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td> {order.total}</td>
                    <td>{order.nom}</td>
                    <td>{order.prénom}</td>
                    <td>{order.telephone}</td>

                    <td>{order.email}</td>

                    <td>{order.address}</td>
                    <td>
                        {order.cartItems.map((item) => (
                            <div>
                            {item.title}
                            </div>
                        ))}
                        </td>
                    </tr>
                    ))} */} 
                </tbody>
            </table>
            
        </div>
    )
}

export default Reservation


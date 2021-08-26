
import React, { Component, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getOrdersres } from "../../actions/OrdrerReserveAction";
const Orderres = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getOrdersres())
      }
  , [])
  

  const ordersres = useSelector(state => state.orderResReducer.ordersres)
  return (
       <div className="container" style={{marginLeft:"10px"}}>
        <h2>les reservation</h2>
        <table className="table" style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Telephone</th>

              <th>EMAIL</th>
              <th>ADDRESS</th>

              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {ordersres && ordersres.map((orderres) => (
              <tr>
                <td>{orderres._id}</td>
                <td>{orderres.createdAt}</td>
                <td>{orderres.nom}</td>
                <td>{orderres.prénom}</td>
                <td>{orderres.telephone}</td>

                <td>{orderres.email}</td>

                <td>{orderres.address}</td>
{/*                 <td>{orderres.bookings.dateReserver}</td>
 */}
                <td>
                  {orderres.cartrItems.map((item) => (
                    <div>
                    {item.title}
                    {item.prix}

                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
    </div>
  )
}

export default Orderres

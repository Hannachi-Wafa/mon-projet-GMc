import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form} from "react-bootstrap"

const DetailsProduct = ({match, history}) => {

    const details = useSelector(state => state.productReducer.Products.find(el=> el._id === match.params.prodId))
 const [qty, setQty] = useState(1)
 const addCartHendler=()=>{
history.push(`/card/${match.params.prodId}?qty=${qty}`)
 }
    return (
       <div>

        <main className="mt-5 pt-4">
        <div className="container dark-grey-text mt-5">
          {/*Grid row*/}
          <div className="row wow fadeIn">
            {/*Grid column*/}

            <div className="col-md-6 mb-4">
              <img src={details.images} className="img-fluid" alt=""/>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              {/*Content*/}
              <div className="p-4" >
               
                <h4 className="fas">{details.title}</h4>

                <div>
                <h6 >{details.price}TND</h6>
                {
                        details.qteStock > 0
                        ? <h6 className="text-success">en stock</h6>
                        : <h6 className="text-danger">hors stock</h6>
                    }
                  </div>               
                   
                <p className="lead font-weight-bold">Description</p>

                <p>{details.description}</p>
                <form className="d-flex justify-content-left">
                {details.qteStock> 0 &&(
                  
  <Form.Control as='select'  value={qty}  style={{width: '100px'}} onChange={(e)=>setQty(e.target.value)}>
                  {[...Array(details.qteStock).keys()].map((x)=>(
                    <option key={x+1} value={x+1}>
                    {x+1}
                    </option>
                  ))} </Form.Control>
                    )}
                  <button  className="btn btn-primary btn-md my-0 p" type="submit" onClick={addCartHendler}> ajouter au panier
                    <i className="fas fa-shopping-cart ml-1" />
                  </button>
                
                </form>
              </div>
              {/*Content*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
          <hr />
          {/*Grid row*/}
         </div>
      </main>

       </div>
       )
}

export default DetailsProduct

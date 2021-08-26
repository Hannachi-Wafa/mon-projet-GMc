
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Productcard from './Productcard'
import { useDispatch } from 'react-redux'
import {getproduct} from '../../actions/ProductAction'
import  { getCategory } from "../../actions/CategoryAction"

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getproduct())
       dispatch(getCategory());

        }
    , [])
    const category = useSelector((state) => state.categoryReducer.category);

    const products = useSelector(state => state.productReducer.Products)
    const [filter, setFilter] = useState("");

    return (
        <div>
      
        <main>
          <div className="container">
         {/*
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary lighten-3 mt-3 mb-5">
             
              <span className="navbar-brand">Categories:</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />

              </button>
              <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">All
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  {category && category.map(category=>
                <li className="nav-item">
                
                    <a className="nav-link" href="#" onChange={(e) => setFilter(e.target.value)}
                        >{category.name}</a>
                  </li>
                  )}
                </ul>
          
              
              </div>
                  </nav>*/}
           
           
        
            <div className="d-flex row mb-4 " >
            {products && products.map(product=><Productcard key={product._id} product={product}/>
            )}
            
            </div>
               
                  {/*Card*/}
                
               
               
                
             
           
          </div>
        </main>
        {/*Main layout*/}
        {/*Footer*/}
        
      </div>
    )
}

export default Products

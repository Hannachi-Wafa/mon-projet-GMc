
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Productcard from './Productcard'
import { useDispatch } from 'react-redux'
import {getproduct} from '../actions/ProductAction'
import {getCategory} from '../actions/CategoryAction'
import { Link, useLocation } from 'react-router-dom'


const Products = ({filter}) => {
const location=useLocation()
const textFilter = filter || (location.state && location.state.filter)|| null
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getproduct())
      dispatch(getCategory());


        }
    , [])
  
    const category = useSelector((state) =>state.categoryReducer.category);
    const products = useSelector(state => state.productReducer.Products)
    const filteredList=()=>{
    return !textFilter || textFilter==="Les produits" ?  products :products.filter(elm=>elm.category_id.name.includes(textFilter))
    }

    return (
        <div>
       <main>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark lighten-3 mt-3 mb-5" style={{backgroundColor:"rgb(235, 100, 171)"}}>  
              <span className="navbar-brand">Categories:</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />

              </button>
              <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav mr-auto">

                  <li className="nav-item active">
                  <Link to={{pathname:'/products',state:{filter:'Les produits'}}}>  <a className="nav-link">Tous
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                  <li className="nav-item active">
                  <Link to={{pathname:'/products',state:{filter:'mariage'}}}>  <a className="nav-link">mariage
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                  <li className="nav-item active">
                  <Link to={{pathname:'/products',state:{filter:'anniversaire'}}}>  <a className="nav-link">anniversaire
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                  <li className="nav-item active">
                  <Link to={{pathname:'/products',state:{filter:'baby shower'}}}> <a className="nav-link">baby shower
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                </ul>
          
              
              </div>
            </nav>
            {/*/.Navbar*/}
            {/*Section: Products v.3*/}
           
        
            <div className="d-flex row mb-4 " >
            {products && filteredList().map(product=><Productcard key={product._id} product={product}/>)}
            
            </div>
               
                  {/*Card*/}
                
               
               
                
            
            {/*Section: Products v.3*/}
            {/*Pagination*/}
            
            {/*Pagination*/}
          </div>
        </main>
        {/*Main layout*/}
        {/*Footer*/}
        
      </div>
    )
}

export default Products

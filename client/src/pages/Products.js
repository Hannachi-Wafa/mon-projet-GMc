
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Productcard from './Productcard'
import { useDispatch } from 'react-redux'
import {getproduct} from '../actions/ProductAction'
import {getCategory} from '../actions/CategoryAction'

const Products = () => {
//const Categories=["mariage","anniversaire", "baby showrs"]
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getproduct())
      dispatch(getCategory());


        }
    , [])
  
    const category = useSelector((state) => state.categoryReducer.category);
    const products = useSelector(state => state.productReducer.Products)
    

    return (
        <div>
        <main>
          <div className="container">
            {/*Navbar*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary lighten-3 mt-3 mb-5">
              {/* Navbar brand */}
              <span className="navbar-brand">Categories:</span>
              {/* Collapse button */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />

              </button>
              {/* Collapsible content */}
              <div className="collapse navbar-collapse" id="basicExampleNav">
                {/* Links */}
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">All
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
               {category && category.map(category=> 
                 <li className="nav-item" >
                
                    <a className="nav-link" 
                                    >{category.name} 

                       </a>
                      
                  </li>
             )}
      
                </ul>
          
                {/* Links */}
              
              </div>
              {/* Collapsible content */}
            </nav>
            {/*/.Navbar*/}
            {/*Section: Products v.3*/}
           
        
            <div className="d-flex row mb-4 " >
            {products && products.map(product=><Productcard key={product._id} product={product}/>)}
            
            </div>
               
                  {/*Card*/}
                
               
               
                
             
            {/*Section: Products v.3*/}
            {/*Pagination*/}
            <nav className="d-flex justify-content-center wow fadeIn">
              <ul className="pagination pg-blue">
                {/*Arrow left*/}
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/*Pagination*/}
          </div>
        </main>
        {/*Main layout*/}
        {/*Footer*/}
        
      </div>
    )
}

export default Products

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ThemeCard from './ThemeCard'
import { useDispatch } from 'react-redux'
import {getTheme} from '../../actions/ThemeAction'
import  { getCategory } from "../../actions/CategoryAction"

const Theme = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTheme())
        dispatch(getCategory());
        }
    , [])
    const category = useSelector((state) => state.categoryReducer.category);
    const Theme = useSelector(state => state.ThemeReducer.Theme);
    const [filter, setFilter] = useState("");

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
                <li className="nav-item">
                
                    <a className="nav-link" href="#" onChange={(e) => setFilter(e.target.value)}
                        >{category.name}</a>
                  </li>
                  )}
                </ul>
          
              
              </div>
                  </nav>
            {/*/.Navbar*/}
            {/*Section: Products v.3*/}
          
        
            <div className="d-flex row mb-4 " >
            {Theme && Theme.map(Theme=><ThemeCard key={Theme._id} Theme={Theme}/>
            )}
            
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

export default Theme

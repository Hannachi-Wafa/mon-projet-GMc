import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ThemeCard from './ThemeCard'
import { useDispatch } from 'react-redux'
import {getTheme} from '../actions/ThemeAction'
import  { getCategory } from "../actions/CategoryAction"
import { Link, useLocation } from 'react-router-dom'

const Theme = ({filter}) => {

    const dispatch = useDispatch()
    const location=useLocation()
    const textFilter = filter || (location.state && location.state.filter)|| null
    useEffect(() => {
        dispatch(getTheme())
        dispatch(getCategory());
        }
    , [])
    const category = useSelector((state) => state.categoryReducer.category);
    const Theme = useSelector(state => state.ThemeReducer.Theme);
   // const [filter, setFilter] = useState("");
    const filteredList=()=>{
      return !textFilter || textFilter==="Les événements" ?  Theme :Theme.filter(elm=>elm.category_id.name.includes(textFilter))
      }
    return (
        <div>
            <main>
          <div className="container">
            {/*Navbar*/}
         <nav className="navbar navbar-expand-lg navbar-dark bg-secondary lighten-3 mt-3 mb-5">
              <span className="navbar-brand">Les Thémes:</span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />

              </button>
              <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto">

                  <li className="nav-item active">
                  <Link to={{pathname:'/pages/ImagesBTN',state:{filter:'Les événements'}}}>  <a className="nav-link">Tous
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                  <li className="nav-item active">
                  <Link to={{pathname:'/pages/ImagesBTN',state:{filter:'mariage'}}}>  <a className="nav-link">mariage
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                  <li className="nav-item active">
                  <Link to={{pathname:'/pages/ImagesBTN',state:{filter:'anniversaire'}}}>  <a className="nav-link">anniversaire
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                  <li className="nav-item active">
                  <Link to={{pathname:'/pages/ImagesBTN',state:{filter:'baby shower'}}}> <a className="nav-link">baby shower
                      <span className="sr-only">(current)</span>
                    </a></Link>

                  
                  </li>
                </ul>
          
              
              </div>
                  </nav>
            {/*/.Navbar*/}
            {/*Section: Products v.3*/}
           
        
            <div className="d-flex row mb-4 " >
            {Theme && filteredList().map(Theme=><ThemeCard key={Theme._id} Theme={Theme}/>
            )}

            </div>
               
                  {/*Card*/}
                
               
               
                
             
            {/*Section: Products v.3*/}
            {/*Pagination*/}
            <nav className="d-flex justify-content-center wow fadeIn" >
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

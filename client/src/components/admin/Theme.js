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
                  </nav>
*/}            
          
        
            <div className="d-flex row mb-4 " >
            {Theme && Theme.map(Theme=><ThemeCard key={Theme._id} Theme={Theme}/>
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

export default Theme

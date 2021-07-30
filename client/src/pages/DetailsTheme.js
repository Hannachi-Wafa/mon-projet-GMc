import React , { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form} from "react-bootstrap"

const DetailsTheme = ({match, history}) => {

    const details = useSelector(state => state.ThemeReducer.Theme.find(el=> el._id === match.params.prodId))
    
const addCartHendler=()=>{
history.push(`/reservcard/${match.params.prodId}`)
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
                    <h6 >{details.prix}TND</h6>
                    
                    </div>               
                    
                    <p className="lead font-weight-bold">Description</p>

                    <p>{details.desc}</p>
                    <p>{details.nbrPersonne}</p>
                    <form className="d-flex justify-content-left">
                    
    
                    <button  className="btn btn-primary btn-md my-0 p" 
                    type="submit" 
                    onClick={addCartHendler}> Réserver
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

export default DetailsTheme

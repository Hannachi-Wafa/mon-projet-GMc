import React , { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Form, Modal} from "react-bootstrap"



const DetailsTheme = ({match, history}) => {

    const details = useSelector(state => state.ThemeReducer.Theme.find(el=> el._id === match.params.themeId))
    const [prx, setPrx] = useState(1)
const addCartHendler=()=>{
history.push(`/reservcard/${match.params.themeId}?prx=${prx}`)
}
const [show, setShow] = useState(false);


    return (
        <div>
            


            <img style={{marginLeft:'30%', width:'550px', height:'170px', marginBottom:'-40px'}} alt='logo' src='../../images/CaptureLogo.PNG'></img>
            
                <main className="mt-5 pt-4">
            <div className="container dark-grey-text mt-5">
            {/*Grid row*/}
            <div className="row wow fadeIn">
                {/*Grid column*/}

                <div className="col-md-6 mb-4">
                <img src={details.images} className="img-fluid" alt="..."/>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-6 mb-4">
                {/*Content*/}
                <div className="p-4" >
                
                    <h2 className="fas"> <span style={{color:'rgb(239, 88, 139)'}}>Théme :  </span>

                        {details.title}</h2>

                    <div>
                    <h4 > <span style={{color:'blue'}}>Prix : </span>
                    {details.prix}  TND</h4>
                    
                    </div>               
                    
                    

                    <h4> <span style={{color:'blue'}}>Description : </span>{details.desc}</h4>
                    <h4> <span style={{color:'blue'}}>Nombre de personne : </span>
                        {details.nbrPersonne}</h4>
                    <form className="d-flex justify-content-left">
                    
    
                    <button  className="btn btn-primary btn-md my-0 p" 
                    type="submit"  onClick={() => setShow(true)}
                    /* onClick={addCartHendler} */> Réserver
                        <i className="fas fa-shopping-cart ml-1" />
                    </button>

            
                    
                    </form>
                    <div className="col-md-4">
                    
                    </div>
                </div>
                {/*Content*/}
                </div>
                {/*Grid column*/}
            </div>
            {/*Grid row*/}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
            {/*Grid row*/}
            </div>
        </main>
        </div>
    )
}

export default DetailsTheme

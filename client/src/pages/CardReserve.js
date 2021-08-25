import React , { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCartReservation, removeFromCartReservation } from '../actions/CardReservAction'
import { Form } from "react-bootstrap"
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
import Alert from 'react-bootstrap/Alert'

const CardReserve = ({match, location, history}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
    const themeIds = match.params.themeId
   // const prx = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cartReserve = useSelector(state => state.ReservCardReducer)
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    if (!isAuth) {
        history.push('/login');
    }
    const { cartrItems } = cartReserve
    useEffect(() => {
        if(themeIds) {
        dispatch(addToCartReservation(themeIds))
        }

    }, [dispatch, themeIds])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCartReservation (id)) 
        
    }
    const checkoutHandler = () => {
        history.push('/Checkout');
    }

    const handleDateChange=(e)=>{
      //setStartDate(e.target.value)
      const d= e.target.value
      console.log(d)
      
 
  
      axios.get(`/reservation/check?date=${d}&theme=${match.params.themeId}`)
      .then(res=>{
        setError("")
        setSuccess(res.data)})
      .catch(err=>{
        setSuccess('')
        setError(err.response.data)
      }) 

    }
    
  
    return (
        <div className="container dark-grey-text mt-5">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-8">
            {/* Card */}
            <div className="card wish-list mb-3">
              <div className="card-body">
                <h5 className="mb-4">Réservation </h5>
                <hr className="mb-4" />
  
                {cartrItems === 0 ? <p>your reservation is empty <Link to='/'> retour </Link></p> : (
                  <div>
                    {cartrItems.map(item => (
  
                      <div className="row mb-4" key={item.theme}>
  
                        <div className="col-md-5 col-lg-3 col-xl-3">
                          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                            <img className="img-fluid w-100" src={item.images} alt="Sample" />
                            <a href="#!">
                              <div className="mask waves-effect waves-light">
                                <img className="img-fluid w-100" src={item.images} />
                                <div className="mask rgba-black-slight waves-effect waves-light" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                          <div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <Link to={`/theme/theme${item.theme}`}> <h5>{item.title}</h5></Link>
  
                              </div>
                              
              
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                            <br></br>

                            <h5>Date</h5>
                            <input type="date"  onChange={handleDateChange}></input>
                            <br></br>
                            <br></br>
                            {success && 
                            <Alert variant="success">
                            Date valider, suivant ...
                            
                          </Alert>}
                            {error && <Alert variant="danger">
                            oopps, date non valide 
                            
                          </Alert>}
                            
                            {/* <DatePicker selected={startDate} minDate={new Date()}
                            isClearable
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select a date"
                            
                            onChange={handleDateChange} /> */}
                            <br></br>
                            <br></br>
                            <p className="mb-0"><span><strong>{item.prix}TND</strong></span></p>
                            <br></br>
                            <br></br>
                              <div>
                                <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3" onClick={() => removeFromCartHandler(item.theme)}><i className="fas fa-trash-alt mr-1" /> Remove item </a>
                              </div>
                              
                            </div>
                            
                            

  
  
                          </div>
  
                        </div>
                      </div>))}
                  </div>
                )}
              </div>
  
            </div>
  
  
          </div>
  
          <div className="col-lg-4">
            {/* Card */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="mb-3"> total</h5>
                <ul className="list-group list-group-flush">
  
  
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong> total</strong>
  
                    </div>
                    <span><strong>{cartrItems.reduce((acc, item) => acc +  item.prix, 0)}TND </strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block waves-effect waves-light" disaled={cartrItems.length === 0} onClick={checkoutHandler}>go to checkout</button>
              </div>
            </div>
  
          </div>
        </div>
            
        </div>
    )
}

export default CardReserve

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser, registerUser } from '../actions/authActions';

const Register = () => {
    // functions
    const [input, setInput] = useState({
      email: '',
      password: '',
    });
    const [input1, setInput1] = useState({
        fullname: '',
        email: '',
        password: '',
      });
    const errors = useSelector((state) => state.authReducer.errors);


    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleChange1 = (e) => {
        setInput1({ ...input1, [e.target.name]: e.target.value });
      };
   const handleSubmit = (e) => {
      e.preventDefault();
     dispatch(loginUser(input, history));
    };
    const handleSubmit1 = (e) => {
        e.preventDefault();
       dispatch(registerUser(input1, history));
      };
    return (
      <div className="container dark-grey-text mt-5" >
        <hr></hr>
        <br></br>
        <br></br>

        <div className="row" style={{  backgroundRepeat: 'no-repeat',backgroundPosition: 'center',
  backgroundSize: 'cover',
      backgroundImage: `url("https://i.pinimg.com/originals/c7/5e/2c/c75e2cf2c5e8d54373cf73cc8ae00a38.jpg")` 
    }}>
              <div className="container col-xs-10 col-sm-5">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-8">
          <br></br>
          <br></br>
            <form className="bg-white  rounded-5 shadow-5-strong p-5" >
            <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <h4 style={{color:'DeepPink'}}>CONNECTEZ-VOUS À VOTRE COMPTE</h4>
                </h3>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">Email address</label>

                <input type="email" id="form1Example1" name="email"className="form-control" onChange={handleChange} />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example2">Password</label>

                <input type="password" id="form1Example2"  name="password" className="form-control" onChange={handleChange}/>
              </div>
              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                <p style={{color: "red"}}> {errors ? errors : ''} </p>

                </div>
                <div className="col text-center">
                  {/* Simple link */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>
              <br></br>
              <br></br>
        
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign in</button>
            </form>
          </div>
        </div>
      </div>   
      <div className="container col-xs-10 col-sm-5" style={{marginLeft:'10px'}} >
        <div className="row " >
          <div className="col-xl-8 col-md-8" >
          <br></br>
          <br></br>
            <form className="bg-white  rounded-5 shadow-5-strong p-5" >
            <div className="text-center"  >
                <h3 className="dark-grey-text mb-5">
                  <h4 style={{color:'DeepPink'}}>CONNECTEZ-VOUS À VOTRE COMPTE</h4>
                </h3>
              </div>
                 {/* Email fullname */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">Full name</label>

                <input type="text" id="form1Example1" name="fullname" className="form-control" onChange={handleChange1}/>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">Email address</label>

                <input type="email" id="form1Example1" name="email"className="form-control" onChange={handleChange1}/>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example2">Password</label>

                <input type="password" id="form1Example2" name="password" className="form-control" onChange={handleChange1}/>
              </div>
              {/* 2 column grid layout for inline styling */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">

                </div>
               
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit1}> Register </button>
            </form>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>  
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        </div>
    )
}

export default Register

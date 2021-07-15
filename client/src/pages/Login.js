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

        <div className="row">
               <div className="container col-xs-12 col-sm-6">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-md-8">
            <form className="bg-white  rounded-5 shadow-5-strong p-5">
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
        
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign in</button>
            </form>
          </div>
        </div>
      </div>   
      <div className="container col-xs-12 col-sm-6">
        <div className="row ">
          <div className="col-xl-8 col-md-8">
            <form className="bg-white  rounded-5 shadow-5-strong p-5">
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
          </div>
        </div>
      </div>  
        </div>
        </div>
    )
}

export default Register

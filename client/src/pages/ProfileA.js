import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './profile.css';

const ProfileA=()=> {
    const isAuth = useSelector((state) => state.authReducer.isAuth);

    const user = useSelector((state) => state.authReducer.user);
    return (
      
        <div className="container dark-grey-text mt-5">
          <div className="row">
       
            <div className="col-md-12">
              <div className="card profile-card-2">

                <div className="card-img-block">

                </div>

                {isAuth ?(
                    <div className="row">
                <div className="card-body pt-5 col-xs-12 col-sm-6">
                  <img src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" alt="profile-image" className="profile"/>
                
                  <div>
                  <a href="#" className="btn btn-primary">modifier mon profile</a>
                  </div>
                </div>
                <div    className="card-body col-xs-12 col-sm-6">
                <h4>  Nom et Prénom</h4>
                  <h5 className="card-title">{user.fullname}</h5>
                  <h4> Email</h4>

                  <h5 className="card-title">{user.email}</h5>
           
                </div>
                
                
                </div>
                ):(<></>)}

              </div>
            </div>
        
    
          </div>
        </div>
    )
}

export default ProfileA

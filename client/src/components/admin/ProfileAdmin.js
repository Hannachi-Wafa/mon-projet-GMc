import React from 'react'
import Addproduct from './Addproduct'
import Products from './Products'

const ProfileAdmin = () => {
    return (
        <div>
            <h1>ADMIN</h1>
            
                
           <div style={{display:'flex'}}>
               <div> <Addproduct></Addproduct></div>
            
            <Products></Products>
            </div>
        </div>
    )
}

export default ProfileAdmin

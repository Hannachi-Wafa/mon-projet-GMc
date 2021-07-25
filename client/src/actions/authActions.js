import {UPDATE_USER,UPDATE_FAIL, ADD_TO_CART_USER, ADD_TO_CART_USER_FAIL, GET_USER_FAIL, GET_USER_SUCCESS, LOGIN_FAIL, LOGIN_USER, LOGOUT, REGISTER_FAIL, REGISTER_USER } from "./types"

import axios from "axios"
import { tokenSet } from "../helpers/tokenSet"

export const registerUser=(data,history)=>async(dispatch)=>{
try {
    const res=await axios.post('/user/newuser',data)
    console.log(res)
    dispatch({type:REGISTER_USER,payload:res.data})
    history.push('/profile')

} catch (error) {
    dispatch({type:REGISTER_FAIL,payload:error?.response?.data?.error})
}
}
export const loginUser=(data,history)=>async(dispatch)=>{
    try {
        const res=await axios.post('/user/login',data)
        console.log(res)
        dispatch({type:LOGIN_USER,payload:res.data})
        console.log(res.data.user.role)
        if(res.data.user.role===0){ 
          history.push('/profile')}
       else{history.push('/profileAdmin')}


    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error?.response?.data?.error})
    }
    }

    export const getuser= (data) =>async (dispatch) => {
      tokenSet();

      try {
        const res= await axios.get("/user",data)
     
          dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data,
          })}
    catch(err){ 
          dispatch({
            type: GET_USER_FAIL,
            payload: err.response.data.errors,
          })
        
    }}


    export const logout = (history) => async (dispatch) => {
        try {
          dispatch({ type: LOGOUT });
          history.push('login');
        } catch (error) {
          console.log(error);
        }
      };
  

      export const updateUser=(data,id)=>async(dispatch)=>{
        tokenSet();

        try {
            const res=await axios.put(`/user/user/${id}`,data,{headers: {"auth-token":localStorage.getItem('auth-token')}})
            dispatch({type:UPDATE_USER,payload:res.data})

        } catch (error) {
            dispatch({type:UPDATE_FAIL,payload:error?.response?.data?.error})
        }
        }
     
   
  {/*} export  const addCart = async (product) => {

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
              headers: {"auth-token":localStorage.getItem('auth-token')}}            )

        }else{
            alert("This product has been added to cart.")
        }
    }*/}
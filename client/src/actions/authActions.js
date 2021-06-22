import { LOGIN_FAIL, LOGIN_USER, LOGOUT, REGISTER_FAIL, REGISTER_USER } from "./types"

import axios from "axios"

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
    export const logout = (history) => async (dispatch) => {
        try {
          dispatch({ type: LOGOUT });
          history.push('login');
        } catch (error) {
          console.log(error);
        }
      };
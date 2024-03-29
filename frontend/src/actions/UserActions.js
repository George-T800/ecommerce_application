import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_LOGOUT,
  } from "../constants/userConstants";


  export const login=(email, password)=>async(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config={
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data}=await axios.post(
            'http://127.0.0.1:8000/api/users/login/',
            {'email':email, 'password':password},
            config
            )
        
            dispatch({
                type:USER_LOGIN_SUCCESS,
                payload:data
            })
            localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        console.log(error.message)
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response &&error.response.data.details? error.response.data.details
            :error.message,
          })
    }
  }
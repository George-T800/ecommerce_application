import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
} from "../constants/userConstants";

export const UserListReducer=(state= {user:{}}, action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true, user:[]}
        case USER_LOGIN_SUCCESS:
            return {loading:false, user:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false, error:action.payload}
        
        case USER_LOGIN_LOGOUT:
            return {}
        default:
            return state
    }
}
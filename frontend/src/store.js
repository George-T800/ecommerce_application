import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers } from './reducers/productReducers'
import {cartReducer} from './reducers/carteducers'
import {UserListReducer} from './reducers/userReducers'


const reducer=combineReducers({
   
    productLists:productListReducers,
    productDetails:productDetailsReducers,
    cart:cartReducer,
    UserListReducer:UserListReducer
})

const cartItemsFromStorage=localStorage.getItem('cartItems')?
        JSON.parse(localStorage.getItem('cartItems')):[]



// login

const userInfoIFromStorage=localStorage.getItem('userInfo')?
        JSON.parse(localStorage.getItem('userInfo')):null
const initialState={
    cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoIFromStorage}
}

const middleware=[thunk]
const store=createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
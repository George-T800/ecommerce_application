import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";


export const listproducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/products/");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.details
            ? error.response.data.details
            :error.message,
    });
  }
};


// product Details

export const CurrentProduct=(id)=>async(dispatch)=>{
  console.log('llll', id)
 
  try{
    dispatch({type:PRODUCT_DETAILS_REQUEST})
    const {data}=await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
    console.log(data)
    dispatch({
      type:PRODUCT_DETAILS_SUCCESS,
      payload:data
    })
  }catch(error){
    
    dispatch({
      type:PRODUCT_DETAILS_FAIL,
      payload:error.response &&error.response.data.details? error.response.data.details
      :error.message,
    })
    // console.log(error)
  }
}

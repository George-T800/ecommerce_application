import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import {useDispatch, useSelector} from 'react-redux'
import {listproducts} from '../actions/productActions'
import Loader from '../components/Loader' 
import Message from '../components/Message' 
function HomeScreen() {
    const dispatch=useDispatch()
  
    const productList=useSelector(state=>state.productLists)
    const {errors, loading,products}=productList
  useEffect(() => {
    dispatch(listproducts())
  
   
  }, []);

  console.log(products)

  return (
    <div>
      <h1>Latest Products</h1>

    {loading ? <Loader/>
    
    :errors? <Message>{errors}</Message>
    :
    <Row>
  
    {products.map((product) => {
        return (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        );
      })
   
    }
    
  </Row>

    }

     
    </div>
  );
}

export default HomeScreen;

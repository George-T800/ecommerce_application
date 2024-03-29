import React, { useState, useEffect } from "react";
import { Link, redirect, useParams, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector  } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/UserActions";
import FormContainer from "../components/FormContainer";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const location=useLocation()
  const navigate=useNavigate()

    const userLogin=useSelector(state=>state.UserListReducer);
    const {error, loading, userInfo}=userLogin
    console.log(userInfo)
    // useEffect(()=>{
    //     if(userInfo){
    //         navigate('/')
    //     }
    // }, [location,navigate, userInfo])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
    {email}, {password}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
            <Col>
            New Customer? 
            <Link to={navigate ? `/register?redirect=${redirect}`: '/register'}>Register</Link>
            </Col>
      </Row>    
    </FormContainer>
  );
}

export default LoginScreen;

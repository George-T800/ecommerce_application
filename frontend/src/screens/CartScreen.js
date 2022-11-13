import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card, LiteGroup} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart, removeFromCart} from '../actions/cartActions'


function CartScreen({match, history}) {
  const {id}=useParams();
  const navigate=useNavigate()
  const productId=id
  const location=useLocation()
  const qty=location.search? Number(location.search.split('=')[1]):1;
  console.log(qty)
  const dispatch=useDispatch()

  const cart=useSelector(state=>state.cart)
  const {cartItems}=cart
  console.log(cartItems)

  useEffect(()=>{
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler=(id)=>{
   dispatch(removeFromCart(id))
  }
  const checkoutHandler=()=>{
    navigate('/login?redirect=shipping')
  }

  return (
    <div>
       <Row>
          <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length===0 ? (
              <Message variant="info">
                Your Cart is empty <Link to="/">Go Back</Link>
              </Message>
            ):
            (
              <ListGroup>
                {cartItems.map(item=>(
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image}/>
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>
                       ${item.price}
                      </Col>
                      <Col xs="auto" className="my-1">
                                <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))}
                                >
                                    {
                                        [...Array(item.countInStock).keys()].map((x)=>(
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))
                                    }

                                </Form.Control>
                            </Col>
                      <Col md={1}>
                        <Button
                          type="button"
                          variant='light'
                          onClick={()=>removeFromCartHandler(item.product)}
                        >
                          <i className='fas fa-trash'></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )
          }
          </Col>

          <Col md={4}>
            <Card>
              <ListGroup
                  variant="flash"
                >
                  <ListGroup.Item>
                    <h2>Subtotal: ({cartItems.reduce((a,b)=> a+b.qty,0)})</h2>
                    ${cartItems.reduce((acc,item)=>acc+item.qty*item.price,0)}
                  </ListGroup.Item>
              </ListGroup>

              <ListGroup.Item>
                <Button 
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length===0}
                  onClick={checkoutHandler}
                >
                  Proccess to  checkout
                </Button>
              </ListGroup.Item>

            </Card>
          </Col>
       </Row>
    </div>
  )
}

export default CartScreen
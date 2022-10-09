import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap';
import Rating from '../components/Rating'
import products from '../product';
function ProductScreen({match}) {
    const [pro, setProd]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        
        setProd(
            products.find((p)=>p._id==id)
        )
    })
  return (
    <div>
        <Link to='/' className='btn btn-lign my-3'>Go back</Link>
        <Row>
            <Col md={6}>
                <Image src={pro.image} alt={pro.name}/>
            </Col>
            <Col md={6}>
               <ListGroup variant="flush">
                    <h3> {pro.name}</h3>
               </ListGroup>
               <ListGroup>
                 <Rating value={pro.rating} text={`${pro.numReviews}`}/>
               </ListGroup>
               <ListGroup>
                {pro.description} 
               </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong> ${pro.price} </strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {pro.countInStock>0? 'in STock' : "out of Stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <button className='btn-block' disabled={pro.countInStock='true'} type='button'>Add to Cart</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
       
    </div>
  )
}

export default ProductScreen
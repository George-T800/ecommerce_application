import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({product}) {
  return (
    <div>
        <Card>
            <Link to={`/product/${product._id}`}>

                <Card.Img src={product.image}/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>

                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>

            <Card.Text as="div">
                <div className='my-3'>
                    
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f83825'}/>
                </div>
            </Card.Text>
            <Card.Text as="div">
                <div className='my-3'>
                    
                    {product.price}
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product
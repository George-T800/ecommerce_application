import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
} from "react-bootstrap";

import Rating from "../components/Rating";
import products from "../product";

import { useDispatch, useSelector } from "react-redux";
import { CurrentProduct } from "../actions/productActions";

function ProductScreen({ match, history }) {
    let navigate = useNavigate();
    const [qty, setQty]=useState(1)


  const { id } = useParams();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CurrentProduct(id));
    console.log(id);
  }, [dispatch]);

  const addToCartHandler=()=>{
    console.log(`add to cart ${id}?qty=${qty}`)
    navigate(`/Cart/${id}?qty=${qty}`)
  }
  return (
    <div>
      <Link to="/" className="btn btn-lign my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <h3> {product.name}</h3>
          </ListGroup>
          <ListGroup>
            <Rating value={product.rating} text={`${product.numReviews}`} />
          </ListGroup>
          <ListGroup>{product.description}</ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong> ${product.price} </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "in Stock" : "out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

                {product.countInStock>0 &&(
                    <ListGroup.Item>
                        <Row>
                            <Col>Qty</Col>
                            <Col xs="auto" className="my-1">
                                <Form.Control
                                    as="select"
                                    value={qty}
                                    onChange={(e)=>setQty(e.target.value)}
                                >
                                    {
                                        [...Array(product.countInStock).keys()].map((x)=>(
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))
                                    }

                                </Form.Control>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}

              <ListGroup.Item>
                {console.log(product.countInStock)}
                <button
                  onClick={addToCartHandler}
                  className="btn-block"
                  disabled={product.countInStock == 0}
                  type="button"
                >
                  Add to Cart
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;

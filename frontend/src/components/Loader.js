import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loader() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden"></span>
    </Spinner>
  )
}

export default Loader
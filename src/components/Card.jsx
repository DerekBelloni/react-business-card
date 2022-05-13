import React from 'react';
import Photo from "./Photo";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Name from "./Name";

const Card = () => {
  return (
    <div className="container-fluid card--body">
      <div className="Row">
        <div className="col-6 d-flex">
          <Photo />
          <div >
            <Name />
          </div>
        </div>
        <div className="col-6">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  )
}

export default Card
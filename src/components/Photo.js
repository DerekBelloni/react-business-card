import React from 'react';
import myPhoto from '../images/my-photo.jpg'

const Photo = () => {
  return (
    <>
      <h1 className="card--photo">Photo goes here</h1>
      <img className="card--photo" src={myPhoto} alt="" />
    </>
  )
}

export default Photo;
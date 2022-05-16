import React from 'react';
import myPhoto from '../images/my-photo.jpg'

const Photo = () => {
  return (
    <>
      <img className="card--photo" src={myPhoto} alt="" />
    </>
  )
}


export default Photo;
import React from 'react';
import myPhoto from '../images/my-photo.jpg'

const Photo = () => {
  return (
    <div className="">
      <img className="card--photo img-fluid" src={myPhoto} alt="" />
    </div>
  )
}

export default Photo
import React from 'react';

function Place({ eachPlace }) {
  const { name, image, location } = eachPlace

  return (
    <div className="card">
      <img
        src={image}
        alt="Avatar" />
      <div className="card-text">
        <h3 className="text-title"><strong>{name}</strong></h3>
        <p className="location-text">{location}</p>
      </div>
    </div>
  )
}

export default Place;
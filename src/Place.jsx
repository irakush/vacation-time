import React from 'react';

function Place({ eachPlace, handlePlace, onHandleDelete }) {
  const { name, image, location } = eachPlace
 

  function showPlaceDetails() {
    console.log('clicked')
    handlePlace(eachPlace)
    
  }

  return (
    <div className="card" onClick={showPlaceDetails}
    handleDelete={onHandleDelete}>
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
import React from 'react';
import Place from './Place.jsx'

function PlacesList({ placesArray }) {

  const placeCards = placesArray.map(eachPlace => {
    return <Place eachPlace={eachPlace} key={eachPlace.id} />
  })

  return (
    <div className="card-container">
      {placeCards}
      <br />
      <br />
      <br />
    </div>
  )
}

export default PlacesList;
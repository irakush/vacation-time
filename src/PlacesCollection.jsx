import React from 'react';
import Place from './Place.jsx'

function PlacesCollection({ placesArray }) {

  const placeCards = placesArray.map(eachPlace => {
    return <Place eachPlace={eachPlace} key={eachPlace.id} />
  })

  return (
    <div className="card-container">
      {placeCards}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default PlacesCollection;
import React from 'react';
import Place from './Place.jsx'


function PlacesCollection({ placesArray, handlePlace}) {

  const placeCards = placesArray.map(eachPlace => {
    return <Place eachPlace={eachPlace} key={eachPlace.id} handlePlace={handlePlace} />
  })

 

  return (
    <div className="card-container"
      >
      {placeCards}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default PlacesCollection;
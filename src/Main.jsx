import React, { useState, useEffect } from 'react';

import Search from './Search.jsx';
import PlacesCollection from './PlacesCollection';
import PlaceDetails from './PlaceDetails.jsx'
import Footer from './Footer.jsx';

function Main() {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});

  const handlePlace = (place) => {
    // console.log(event)
    // console.log(event.target)
    setPlaceDetails(place)
  }

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setPlacesArray(data)
        setPlaceDetails(data[0])
      })
      .catch(error => console.log)
  }, [])

  return (
    <>
      <Search />
      <PlacesCollection
        placesArray={placesArray}
        handlePlace={handlePlace}
      />
      <PlaceDetails
        details={placeDetails}
      />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default Main;
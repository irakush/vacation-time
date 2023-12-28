import React, { useState, useEffect } from 'react';

import Search from './Search.jsx';
import PlacesCollection from './PlacesCollection';
import PlaceDetails from './PlaceDetails.jsx'
import Footer from './Footer.jsx';

function Main() {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setPlacesArray(data))
      .catch(error => console.log)
  }, [])

  return (
    <>
      <Search />
      <PlacesCollection placesArray={placesArray} />
      <PlaceDetails />
      <Footer />
    </>
  )
}

export default Main;
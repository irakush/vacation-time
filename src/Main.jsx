// Main.jsx
import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import PlacesCollection from './PlacesCollection';
import PlaceDetails from './PlaceDetails.jsx';
import Footer from './Footer.jsx';
import CreateNewPlace from './CreateNewPlace.jsx';

function Main({ isCreateNewPlace }) {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});

  const handlePlace = (place) => {
    if (isCreateNewPlace) {
      // For a newly created place, set its details directly
      setPlaceDetails(place);
    } else {
      // For an existing place, set its details as usual
      setPlaceDetails(place);
    }
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setPlacesArray(data);
        setPlaceDetails(data[0]);
      })
      .catch((error) => console.log);
  }, []);

  const createNewPlace = (newPlace) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((createdPlace) => {
        setPlacesArray((prevPlaces) => [...prevPlaces, createdPlace]);
        setPlaceDetails(createdPlace);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Search />
      <PlacesCollection placesArray={placesArray} handlePlace={handlePlace} />

      {/* Conditionally render PlaceDetails or CreateNewPlace based on isCreateNewPlace */}
      {isCreateNewPlace ? (
        <CreateNewPlace onCreatePlace={createNewPlace} />
      ) : (
        <PlaceDetails details={placeDetails} />
      )}

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Main;
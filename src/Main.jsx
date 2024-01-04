import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import PlacesCollection from './PlacesCollection';
import PlaceDetails from './PlaceDetails';
import Footer from './Footer.jsx';
import CreateNewPlace from './CreateNewPlace.jsx';

function Main({ isCreateNewPlace }) {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});

  const handlePlace = (place) => {
    if (isCreateNewPlace) {
      setPlaceDetails(place);
    } else {
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

  const handleDelete = (id) => {
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPlacesArray((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
        setPlaceDetails({});
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <Search/>
    <div className="main-container">
    <div className="places-details-container">
      <PlacesCollection placesArray={placesArray} handlePlace={handlePlace} />
      <PlaceDetails details={placeDetails} onDelete={handleDelete} />
    </div>
    <div className="create-new-place-container">
          {isCreateNewPlace && <CreateNewPlace onCreatePlace={createNewPlace} />}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Main;

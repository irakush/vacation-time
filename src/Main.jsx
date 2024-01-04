import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import PlacesCollection from './PlacesCollection';
import PlaceDetails from './PlaceDetails';
import Footer from './Footer.jsx';
import EditForm from './EditForm';

function Main({ isCreateNewPlace }) {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlace, setEditedPlace] = useState(null);

  const handlePlace = (place) => {
    setPlaceDetails(place);
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

  const handleDelete = (deletedPlaceId) => {
    fetch(`${URL}/${deletedPlaceId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPlacesArray((prevPlaces) =>
          prevPlaces.filter((place) => place.id !== deletedPlaceId)
        );
        setPlaceDetails({});
        setIsEditing(false);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (place) => {
    setEditedPlace(place);
    setIsEditing(true);
  };

  const updatePlace = (updatedPlace) => {
    fetch(`${URL}/${updatedPlace.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: updatedPlace.name,
        location: updatedPlace.location,
        image: updatedPlace.image,
        description: updatedPlace.description,
      }),
    })
      .then((res) => res.json())
      .then((updatedPlaceFromServer) => {
        setPlacesArray((prevPlaces) =>
          prevPlaces.map((place) =>
            place.id === updatedPlaceFromServer.id
              ? updatedPlaceFromServer
              : place
          )
        );
        setPlaceDetails(updatedPlaceFromServer);
        setIsEditing(false);
        setEditedPlace(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Search />
      <div className="main-container">
        <div className="places-details-container">
          <PlacesCollection
            placesArray={placesArray}
            handlePlace={handlePlace}
            onDelete={handleDelete}
          />
          <PlaceDetails
            details={placeDetails}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
        <div className="create-new-place-container">
          {isEditing && editedPlace && (
            <EditForm
              place={editedPlace}
              onUpdatePlace={updatePlace}
              onCancelEdit={() => setIsEditing(false)}
            />
          )}
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
import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import PlacesCollection from './PlacesCollection';
import PlaceDetails from './PlaceDetails.jsx';
import Footer from './Footer.jsx';
import CreateNewPlace from './CreateNewPlace.jsx';
import EditForm from './EditForm';

function Main({ isCreateNewPlace }) {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState("")
  const [isEditReview, setIsEditReview] = useState(false)
  const [editReview, setEditReview] = useState({})
  const [isEditing, setIsEditing] = useState(false);
  const [editedPlace, setEditedPlace] = useState(null);

  const handlePlace = (place) => {
    // if (isCreateNewPlace) {
    //   setPlaceDetails(place);
    // } else {
    //   setPlaceDetails(place);
    // }
    setPlaceDetails(place);
  };

  const onEditReview = (review) => {
    setEditReview(review)
    setIsEditReview(true)
  }

  const cnahgePostOrEdit = (trOrFs) => {
    setIsEditReview(trOrFs)
  }

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setPlacesArray(prevPlacesArr => data);
        setPlaceDetails(prevPlacesDetails => data[0]);
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

  // Search ==================================
  const onHandleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  }
  console.log(searchTerm);

  const displayedPlaces = placesArray.filter((place) => {
    return place.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Delete ==================================
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

  const handleEdit = (place) => {
    setEditedPlace(place);
    setIsEditing(true);
  };

  // const updatePlace = (updatedPlace) => {
  //   fetch(`${URL}/${updatedPlace.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: updatedPlace.name,
  //       location: updatedPlace.location,
  //       image: updatedPlace.image,
  //       description: updatedPlace.description,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((updatedPlaceFromServer) => {
  //       setPlacesArray((prevPlaces) =>
  //         prevPlaces.map((place) =>
  //           place.id === updatedPlaceFromServer.id
  //             ? updatedPlaceFromServer
  //             : place
  //         )
  //       );
  //       setPlaceDetails(updatedPlaceFromServer);
  //       setIsEditing(false);
  //       setEditedPlace(null);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <Search
        searchTerm={searchTerm}
        onHandleSearch={onHandleSearch}
      />
      <div className="main-container">
        <div className="places-details-container">
          <PlacesCollection
            placesArray={displayedPlaces}
            onEdit={handleEdit}
            handlePlace={handlePlace} />
          <PlaceDetails
            details={placeDetails}
            handlePlace={handlePlace}
            onEditReview={onEditReview}
            isEditReview={isEditReview}
            cnahgePostOrEdit={cnahgePostOrEdit}
            editReview={editReview}
            onDelete={handleDelete}
            onEdit={handleEdit} />
        </div>
        {isEditing && editedPlace && (
          <EditForm
            place={editedPlace}
            // onUpdatePlace={updatePlace}
            onCancelEdit={() => setIsEditing(false)}
          />
        )}
        {isCreateNewPlace && <CreateNewPlace onCreatePlace={createNewPlace} />}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Main;

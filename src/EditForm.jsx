import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditForm({ place }) {
  const location = useLocation();
  const navigate = useNavigate();

  place = location.state.details;

  console.log('receivedData =====> ', place)

  const [editedPlace, setEditedPlace] = useState({ ...place });
  const [placesArray, setPlacesArray] = useState([]);
  const [placeDetails, setPlaceDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const URL = 'http://localhost:3001/places';

  useEffect(() => {
    setEditedPlace(place);
  }, [place]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPlace((prevPlace) => ({
      ...prevPlace,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePlace(editedPlace);
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
        navigate('/')
        // setPlacesArray((prevPlaces) =>
        //   prevPlaces.map((place) =>
        //     place.id === updatedPlaceFromServer.id
        //       ? updatedPlaceFromServer
        //       : place
        //   )
        // );
        // setPlaceDetails(updatedPlaceFromServer);
        // setIsEditing(false);
        // setEditedPlace(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedPlace.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={editedPlace.location}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={editedPlace.image}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          rows="4" cols="50"
          value={editedPlace.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Update Place</button>
      {/* <button type="button" onClick={onCancelEdit}>
        Cancel
      </button> */}
    </form>
  );
}

export default EditForm;
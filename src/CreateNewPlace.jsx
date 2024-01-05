import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNewPlace({ onCreatePlace }) {
  const URL = 'http://localhost:3001/places';
  const navigate = useNavigate();

  const [newPlace, setNewPlace] = useState({
    name: '',
    image: '',
    location: '',
    description: '',
    reviews: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlace((prevPlace) => ({
      ...prevPlace,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewPlace(newPlace);

    setNewPlace({
      name: '',
      image: '',
      location: '',
      description: '',
      reviews: [],
    });
  };

  const createNewPlace = (newPlace) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((createdPlace) => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div >
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Create New Place</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <textarea
            type="text"
            name="name"
            value={newPlace.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Image URL:
          <textarea
            type="text"
            name="image"
            value={newPlace.image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <textarea
            type="text"
            name="location"
            value={newPlace.location}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newPlace.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Create Place</button>
      </form>
    </div>
  );
}

export default CreateNewPlace;

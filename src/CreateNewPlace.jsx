import React, { useState } from 'react';

function CreateNewPlace({ onCreatePlace }) {
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

    onCreatePlace(newPlace);

    setNewPlace({
      name: '',
      image: '',
      location: '',
      description: '',
      reviews: [],
    });
  };

  return (
    <div className>
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

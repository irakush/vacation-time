import React, { useState } from 'react';

function CreateNewPlace({ onCreatePlace, onCancel }) {
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
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newPlace.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create Place</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateNewPlace;

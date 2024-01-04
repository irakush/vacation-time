import React, { useState, useEffect } from 'react';

function EditForm({ place, onUpdatePlace, onCancelEdit }) {
  const [editedPlace, setEditedPlace] = useState({ ...place });

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
    onUpdatePlace(editedPlace);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={editedPlace.description}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Update Place</button>
      <button type="button" onClick={onCancelEdit}>
        Cancel
      </button>
    </form>
  );
}

export default EditForm;
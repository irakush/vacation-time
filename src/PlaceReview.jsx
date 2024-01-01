import React, { useState } from 'react';
import { patchReview } from './api';

const PlaceReview = ({ placeId, reviewId }) => {
 const [newReview, setNewReview] = useState({});

 const handleSubmit = async (e) => {
    e.preventDefault();
    await patchReview(placeId, reviewId, newReview);
    // Perform any necessary actions after the review has been updated
 };

 const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
 };

 return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} />

      <label>Description:</label>
      <textarea name="description" onChange={handleChange} />

      <label>Created:</label>
      <input type="text" name="created" onChange={handleChange} />

      <button type="submit">Update Review</button>
    </form>
 );
};

export default PlaceReview;
import React, { useState } from 'react';

function ReviewEditForm({ editReview, onUpdateReview }) {

  const tempReview = {
    id: editReview.id,
    name: editReview.name,
    description: editReview.description,
    created: editReview.created
  }

  const clearReview = {
    id: 0,
    name: "",
    description: "",
    created: ""
  }

  const [review, setReview] = useState(tempReview);

  console.log('review: ', review)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateReview(review);
    setReview(clearReview)
  };

  return (
    <form onSubmit={handleUpdate}>
      <hr />
      <label>Name:</label>
      <input type="text" name="name" value={review.name} onChange={handleChange} required />
      <br />
      <br />
      <label>Comment:</label>
      <textarea type="text" name="description" rows="4" cols="50" value={review.description} onChange={handleChange} required />
      <br />
      <button type="submit">Update Review</button>
    </form>
  );
}

export default ReviewEditForm;
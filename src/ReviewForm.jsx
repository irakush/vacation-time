import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const d = new Date();
  const createdDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  const tempReview = {
    name: '',
    description: '',
    created: createdDate
  }

  const [review, setReview] = useState(tempReview);

  console.log('review: ', review)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review);
    setReview(tempReview)
  };

  return (
    <form onSubmit={handleSubmit}>
      <hr />
      <label>Name:</label>
      <input type="text" name="name" value={review.name} onChange={handleChange} required />
      <br />
      <br />
      <label>Comment:</label>
      <textarea type="text" name="description" rows="4" cols="50" value={review.description} onChange={handleChange} required />
      <br />
      <button type="submit">Post Review</button>
    </form>
  );
}

export default ReviewForm;
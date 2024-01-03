import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const d = new Date();
  const tempReview = {
    name: '',
    description: '',
    created: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
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
      <label>
        Name:
        <input type="text" name="name" value={review.name} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Comment:
        <input type="text" name="description" value={review.description} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Post Review</button>
    </form>
  );
}

export default ReviewForm;
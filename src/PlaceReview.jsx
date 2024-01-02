import React, { useState } from 'react';

function AddReviewForm({ onAddReview }) {
  const [review, setReview] = useState('');

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleAddReview = () => {
    // Validate if the review is not empty before adding
    if (review.trim() !== '') {
      onAddReview(review);
      setReview('');
    }
  };

  return (
    <div>
      <textarea
        placeholder="Add your review..."
        value={review}
        onChange={handleReviewChange}
      />
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
}

export default AddReviewForm;

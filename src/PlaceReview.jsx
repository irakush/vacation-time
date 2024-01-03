import React from 'react';
import ReviewForm from './ReviewForm';

function PlaceReview({ eachReview, onReviewSubmit }) {
  return (
    <div className="horizontal-card-reviews">
      {/* Render existing reviews */}
      {eachReview.map((review) => (
        <div key={review.id}>
          <p>{review.name}</p>
          <p>{review.comment}</p>
        </div>
      ))}
      {/* Render the review form */}
      <ReviewForm onSubmit={onReviewSubmit} />
    </div>
  );
}

export default PlaceReview;

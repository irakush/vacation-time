
import React, { useState } from 'react';
import PlaceReview from './PlaceReview';

function PlaceDetails({ details }) {
  const [reviews, setReviews] = useState(details.reviews || []);

  const handleReviewSubmit = (reviewData) => {
  
    setReviews([...reviews, { ...reviewData, id: reviews.length + 1 }]);
  };

  if (Object.keys(details).length > 0) {
    const { name, image, location, description } = details;

    return (
      <div className="horizontal-card">
        <img src={image} alt="Description" className="horizontal-card-image" />
        <div className="horizontal-card-content">
          <h2>{name}</h2>
          <h4>{location}</h4>
          <small>{description}</small>
       
          <PlaceReview eachReview={reviews} onReviewSubmit={handleReviewSubmit} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default PlaceDetails;


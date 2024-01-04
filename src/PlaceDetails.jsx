import React, { useState } from 'react';
import PlaceReview from './PlaceReview';

function PlaceDetails({ details, onEdit, onDelete}) {
  const [reviews, setReviews] = useState(details.reviews || []);

  const handleReviewSubmit = (reviewData) => {
    setReviews([...reviews, { ...reviewData, id: reviews.length + 1, placeId: details.id }]);
  };

  const handleEdit = () => {
    onEdit(details);
  }

  const handleDelete = () => {
    onDelete(details.id);
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
          <div className="action-buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <PlaceReview eachReview={reviews} onReviewSubmit={handleReviewSubmit} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default PlaceDetails;

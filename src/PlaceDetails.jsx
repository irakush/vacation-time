import React, { useState } from 'react';
import PlaceReview from './PlaceReview';
import EditForm from './EditForm';

function PlaceDetails({ details, onEdit, onDelete }) {
  const [reviews, setReviews] = useState(details.reviews || []);
  const [isEditing, setIsEditing] = useState(false);

  const handleReviewSubmit = (reviewData) => {
    setReviews([...reviews, { ...reviewData, id: reviews.length + 1 }]);
  };

  const handleEdit = () => {
    onEdit(details);
    setIsEditing(true);
  };

  const handleDelete = () => {
    onDelete(details.id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleUpdatePlace = (updatedPlace) => {
    console.log('Updated Place:', updatedPlace);
    setIsEditing(false);
  };

  if (Object.keys(details).length > 0) {
    const { name, image, location, description } = details;

    return (
      <div className="horizontal-card">
        <img
          src={image}
          alt="Description"
          className="horizontal-card-image"
        />
        <div className="horizontal-card-content">
          {!isEditing ? (
            <>
              <h2>{name}</h2>
              <h4>{location}</h4>
              <small>{description}</small>
              <div className="action-buttons">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
              <PlaceReview eachReview={reviews} onReviewSubmit={handleReviewSubmit} />
            </>
          ) : (
            <EditForm
              place={details}
              onUpdatePlace={handleUpdatePlace}
              onCancelEdit={handleCancelEdit}
            />
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default PlaceDetails;



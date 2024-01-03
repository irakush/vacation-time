import React from 'react';

function PlaceReview({ eachReview }) {
  const { name, description, created } = eachReview;

  return (
    <div className="horizontal-card-reviews">
      <hr />
      <small>{created}</small>
      <p><small><b>{description}</b></small></p>
      <p>{name}</p>
    </div>
  )
}

export default PlaceReview;

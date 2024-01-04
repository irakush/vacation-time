import React, { useState } from 'react';
import PlaceReview from './PlaceReview';
import ReviewForm from './ReviewForm';

function PlaceDetails({ details, handlePlace }) {
  console.log('1 details :: ', details)
  const reviewsArr = details.reviews

  const onSubmit = (newReview) => {
    reviewsArr.push(newReview)
    patchReviewInDB(reviewsArr)
  }

  const onDelete = (deletedReview) => {
    const reviewsWTDeleted = reviewsArr.filter(eachReview => {
      return eachReview.name !== deletedReview.name
    })
    patchReviewInDB(reviewsWTDeleted)
  }

  function patchReviewInDB(reviewsArray) {
    fetch(`http://localhost:3001/places/${details.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ ...details, reviews: reviewsArray })
    })
      .then(res => res.json())
      .then(data => {
        console.log('RES DATA: ', data)
        handlePlace(data)
      })
  }

  if (Object.keys(details).length > 0) {
    const { name, image, location, description, reviews } = details;

    const reviewsDetails = reviews.map(eachReview => {
      console.log('create Review Details')
      return <PlaceReview eachReview={eachReview} key={eachReview.name} onDelete={onDelete} />
    })

    return (
      <div className="horizontal-card">
        <img src={image} alt="Description" className="horizontal-card-image" />
        <div className="horizontal-card-content">
          <h2>{name}</h2>
          <h4>{location}</h4>
          <small>{description}</small>
          {reviewsDetails}
          {/* <PlaceReview eachReview={reviews.filter(review => review.placeId === details.id)} onReviewSubmit={handleReviewSubmit} /> */}
          <ReviewForm onSubmit={onSubmit} />
          {/* onSubmit={onReviewSubmit}  */}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default PlaceDetails;

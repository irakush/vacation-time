import React, { useState } from 'react';
import PlaceReview from './PlaceReview';
import ReviewForm from './ReviewForm';
import ReviewEditForm from './ReviewEditForm';

function PlaceDetails({ details, handlePlace, onEditReview, isEditReview, cnahgePostOrEdit, editReview, onDelete }) {

  const handleDelete = () => {
    onDelete(details.id);
  };

  const handleEdit = () => {
    console.log('test')
  }

  // console.log('1 details :: ', details)
  const reviewsArr = details.reviews

  const onSubmitReview = (newReview) => {
    reviewsArr.push(newReview)
    patchReviewInDB(reviewsArr)
  }

  const onUpdateReview = (updatedReview) => {
    const reviewsWithUpdated = reviewsArr.map(eachReview => {
      if (eachReview.id === updatedReview.id) {
        return updatedReview
      } else {
        return eachReview
      }

    })
    patchReviewInDB(reviewsWithUpdated)
    cnahgePostOrEdit(false)
  }

  const onDeleteReview = (deletedReview) => {
    const reviewsWTDeleted = reviewsArr.filter(eachReview => {
      return eachReview.id !== deletedReview.id
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
        handlePlace(data)
      })
  }

  if (Object.keys(details).length > 0) {
    const { name, image, location, description, reviews } = details;

    const reviewsDetails = reviews.map(eachReview => {
      console.log('create Review Details')
      return <PlaceReview eachReview={eachReview} key={eachReview.id} onDeleteReview={onDeleteReview} onEditReview={onEditReview} />
    })

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
          {reviewsDetails}
          {/* <PlaceReview eachReview={reviews.filter(review => review.placeId === details.id)} onReviewSubmit={handleReviewSubmit} /> */}
          {!isEditReview && <ReviewForm onSubmitReview={onSubmitReview} />}
          {isEditReview && <ReviewEditForm editReview={editReview} onUpdateReview={onUpdateReview} />}
          {/* onSubmit={onReviewSubmit}  */}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default PlaceDetails;

import React, { useState } from 'react';
import PlaceReview from './PlaceReview';
import ReviewForm from './ReviewForm';
import ReviewEditForm from './ReviewEditForm';
import { NavLink } from "react-router-dom"
import PlaceWeather from './PlaceWeather';

function PlaceDetails({ details, handlePlace, onEditReview, isEditReview, cnahgePostOrEdit, editReview, onDelete, onEdit, placeWeather }) {

  const buttonStyle = {
    padding: '2px',
    backgroundColor: 'blue',
    color: 'white',
    textDecoration: 'none', // To remove default link styling
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleDelete = () => {
    onDelete(details.id);
  };

  const handleEdit = () => {
    onEdit(details);
  };

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
          <div className="side-by-side">
            <div className="left-section">
              <h2>{name}</h2>
              <h4>{location}</h4>
              <small>{description}</small>
              <br />
              <br />
            </div>
            <div className="right-section">
              <PlaceWeather placeWeather={placeWeather} />
            </div>
          </div>
          <div className="action-buttons">
            <NavLink to="/editplace" state={{ details }} style={buttonStyle} >Edit</ NavLink>&nbsp; &nbsp; &nbsp;
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

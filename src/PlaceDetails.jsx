import React from 'react';
import MyPlaceReview from './PlaceReview';

function PlaceDetails({ details }) {
  console.log(details);

  if (Object.keys(details).length > 0) {
    const { name, image, location, description, reviews } = details;

    const reviewsDetails = reviews.map(eachReview => (
      <MyPlaceReview eachReview={eachReview} key={eachReview.id} />
    ));

    return (
      <div className="horizontal-card">
        <img src={image} alt="Description" className="horizontal-card-image" />
        <div className="horizontal-card-content">
          <h2>{name}</h2>
          <h4>{location}</h4>
          <small>{description}</small>
          {reviewsDetails}
          
        </div>
      </div>
    );
  } else {
    return <></>; // or any placeholder content when details are not available
  }
}

export default PlaceDetails;
import React, { useState } from 'react';
import PlaceReview from './PlaceReview';
import ReviewForm from './ReviewForm';

function PlaceDetails({ details }) {
  const [reviewsDetails, setReviewsDetails] = useState(details.reviews || []);

  // const handleReviewSubmit = (reviewData) => {
  //   setReviews([...reviews, { ...reviewData, id: reviews.length + 1, placeId: details.id }]);
  // };

  useState(details.reviews)

  console.log('1 details :: ', details)
  console.log('2 details.reviews :: ', details.reviews)
  console.log('3 PlaceDetails reviews: ', reviewsDetails)
  const onSubmit = (newReview) => {
    console.log('onSubmit reviews: ', reviewsDetails)
    console.log('onSubmit newReview: ', newReview)


    const newArr = reviewsDetails.push(newReview)

    console.log('onSubmit reviews: ', reviewsDetails)

    console.log('onSubmit newArr: ', newArr)

    fetch(`http://localhost:3001/places/${details.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ ...details.reviews, newReview })
    })
      .then(res => res.json())
      .then(data => console.log('RES DATA: ', data))
  }

  if (Object.keys(details).length > 0) {
    const { name, image, location, description, reviews } = details;

    const reviewsDetails = reviews.map(eachReview => {
      return <PlaceReview eachReview={eachReview} key={eachReview.id} />
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

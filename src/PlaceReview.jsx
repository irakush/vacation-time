import React from 'react';
import ReviewForm from './ReviewForm';

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

// function PlaceReview({ eachReview, onReviewSubmit }) {
//   const {name, description, created} = eachReview
//   console.log('eachReview: ', eachReview)
//   return (
//     <div className="horizontal-card-reviews">
//       {eachReview.map((review) => (
//         <div key={review.id}>
//           <p>{review.name}</p>
//           <p>{review.comment}</p>
//         </div>
//       ))}
//       <ReviewForm onSubmit={onReviewSubmit} />
//     </div>
//   );
// }

export default PlaceReview;

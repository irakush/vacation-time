import React from 'react';

function PlaceReview({ eachReview, onDeleteReview, onEditReview }) {
  const { name, description, created } = eachReview;

  function deletePlaceReview() {
    onDeleteReview(eachReview)
  }

  function editPlaceReview() {
    onEditReview(eachReview)
  }

  return (
    <div className="horizontal-card-reviews">
      <hr />
      <small>{created}</small>
      <p><small><b>{description}</b></small></p>
      <p>{name}</p><button onClick={editPlaceReview}>Edit</button><button onClick={deletePlaceReview}>Delete</button>
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
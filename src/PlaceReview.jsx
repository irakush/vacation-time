import React from 'react';

function PlaceReview({ eachReview, onDelete }) {
  const { name, description, created } = eachReview;

  function deleteReview() {
    onDelete(eachReview)
  }

  return (
    <div className="horizontal-card-reviews">
      <hr />
      <small>{created}</small>
      <p><small><b>{description}</b></small></p>
      <p>{name}</p><button>Edit</button><button onClick={deleteReview}>Delete</button>
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

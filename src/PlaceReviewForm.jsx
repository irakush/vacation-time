import React from 'react';

function PlaceReviewForm() {

  return (
    <form>
      <label>
        Name:
        <input type="text" placeholder="Name" /><br />
        Description:
        <input type="text" placeholder="Description" /><br />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PlaceReviewForm;
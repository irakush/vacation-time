import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://example.com/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
      });

      if (response.ok) {
        const newReview = await response.json();
        onSubmit(newReview);
        setName('');
        setComment('');
      } else {

        console.error('Error creating review:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <textarea type="text" value={name} onChange={handleNameChange} required />
      </label>
      <br />
      <label>
        Comment:
        <textarea value={comment} onChange={handleCommentChange} required />
      </label>
      <br />
      <button type="submit">Post Review</button>
    </form>
  );
}

export default ReviewForm;
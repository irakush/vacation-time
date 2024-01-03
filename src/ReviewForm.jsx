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

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, comment });

    setName('');
    setComment('');
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
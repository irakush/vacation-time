import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx'
import PlaceReview from './PlaceReview.jsx';

function App() {
  return (
    <div> className="App" 
      <h1>Update Review</h1>
      <PlaceReview placeId="1" reviewId="1" />
      <Header />
      <Main />
    </div>
  );
}

export default App;

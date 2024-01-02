// App.jsx
import './App.css';
import React, { useState } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import PlaceReview from './PlaceReview.jsx';


function App() {
  const [isCreateNewPlace, setIsCreateNewPlace] = useState(false);

  const createNewPlace = (newPlace) => {
    console.log('New Place:', newPlace);
    setIsCreateNewPlace(false);
  };

  const handlePlace = (eachPlace) => {
    console.log('Clicked on Place:', eachPlace);
  };

  const handleCancelCreatePlace = () => {
    setIsCreateNewPlace(false);
  };

  const handleNewPlaceClick = () => {
    setIsCreateNewPlace(true);
  };

  return (
    <div className="App">
      <h1>Update Review</h1>
      <PlaceReview placeId="1" reviewId="1" />
      <Header onNewPlaceClick={handleNewPlaceClick} />
      <Main
        isCreateNewPlace={isCreateNewPlace}
        onCreatePlace={createNewPlace} // Use createNewPlace here
        onCancelCreatePlace={handleCancelCreatePlace}
        onPlaceClick={handlePlace}
      />
    </div>
  );
}

export default App;

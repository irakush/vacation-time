import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import PlacesList from './PlacesList';
import Footer from './Footer.jsx';


function App() {
  const URL = 'http://localhost:3001/places';
  const [placesArray, setPlacesArray] = useState([]);

  useEffect( () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPlacesArray(data))
    .catch(error => console.log)
  }, [])

  return (
    <div className="App">
      <Header />
      <Search />
      <PlacesList placesArray={placesArray} />
      <Footer />
    </div>
  );
}

export default App;

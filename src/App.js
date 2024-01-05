import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import {Routes, Route} from "react-router-dom"
import CreateNewPlace from './CreateNewPlace.jsx'
import EditForm from './EditForm.jsx'
import PlaceDetails from './PlaceDetails.jsx'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
          element={
            <Main />
          }
        />
        <Route path="/newplace"
          element={
            <CreateNewPlace />
          }
        />
        <Route path="/editplace"
          element={
            <EditForm />
          }
        />
        <Route path="/showplace"
          element={
            <PlaceDetails />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
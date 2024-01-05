import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function Header({ onNewPlaceClick }) {
  const navigate = useNavigate();

  function goHome() {
    navigate('/')
  }

  return (
    <header className="split-header">
      <div className="left-section">
        <h1 onClick={goHome} >Vacation<span className="orange-color">Time</span></h1>
      </div>
      <div className="right-section">
        <Link to="/newplace">
          <small className="new-place" >
            Create New Place
          </small>
        </Link>
      </div>
    </header>
  );
}

export default Header;
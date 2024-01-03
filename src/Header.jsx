import React from "react";

function Header({ onNewPlaceClick }) {
  return (
    <header className="split-header">
      <div className="left-section">
        <h1>Vacation<span className="orange-color">Time</span></h1>
      </div>
      <div className="right-section">
        <small className="new-place" onClick={onNewPlaceClick}>
          Create New Place
        </small>
      </div>
    </header>
  );
}

export default Header;
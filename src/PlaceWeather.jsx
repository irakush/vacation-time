import React from 'react';

function PlaceWeather({ placeWeather }) {
  const { condition, temp, localtime, icon } = placeWeather

  function checkWeather() {
    if (temp !== "") {
      return (
        <div className="weather">
          <img src={`http:${icon}`} alt="weather" />
          <p>{condition}</p>
          <p>{temp}</p>
          {/* <p>{localtime} F</p> */}
        </div>
      )
    } else {
      return (
        <p> The Weather service is unavailable right now for this place</p>
      )
    }
  }

  return (
    checkWeather()
  )

}

export default PlaceWeather;
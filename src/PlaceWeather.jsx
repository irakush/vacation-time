import React from 'react';

function PlaceWeather({ city }) {
  const WEATHER_URL = "http://api.weatherapi.com/v1/current.json"

  // setWeather(blankWeather)

  console.log('place weather')

  return (
    <div className="weather">
      <p>{"Sunny"}</p>
      <p>{"37,5 F"}</p>
    </div>
  )


  // fetch(WEATHER_URL + `?key==${city}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log('weather:  ', data)
  //     // return (
  //     //   <div className="weather">
  //     //     <p>{data ? data.current.city : "1"}</p>
  //     //     <p>{data ? data.current.temp_f : "1"}</p>
  //     //   </div>
  //     // )
  //     console.log('place weather')
  //     return (
  //       <div className="weather">
  //         <p>{"2"}</p>
  //         <p>{"3"}</p>
  //       </div>
  //     )
  //   })
}

export default PlaceWeather;
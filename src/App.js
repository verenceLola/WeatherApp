
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import LocationInput from './components/Form'
import WeatherInfo from './components/WeatherInfo'

const App = () =>  {
    const [weatherData, setWeatherData] = React.useState([])


  return (
    <>
    <LocationInput setWeatherData={setWeatherData} />
    <WeatherInfo weatherData={weatherData} />
    </>
  )
}


export default App;

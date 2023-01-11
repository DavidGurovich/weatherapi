
import './App.css';
import { useEffect, useState } from "react";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './api/weather';

function App() {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("imperial");
  const [city, setCity] = useState("San Diego");
  
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      console.log(data)
      
    };

    fetchWeatherData();
  }, [units, city]);

  return (
    weather &&
   <div className='rounded-3xl mx-auto max-w-screen-md mt4 mt-14 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 
   h-fit shadow-xl shadow-gray-400'>
    
    <TopButtons setCity = {setCity}/>
    <Inputs city={city} setCity={setCity} units={units} setUnits={setUnits}/>
    <TimeLocation weather = {weather}/>
    <Temperature weather = {weather}/>
    {/* <Forecast title="hourly forecast"/>
    <Forecast title="daily forecast"/> */}
    
   </div> 
  );
}

export default App;

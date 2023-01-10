
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeLocation from './components/TimeLocation';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './api/weather';

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london"});
    console.log(data);

  };

  fetchWeather();

  return (
   <div className='rounded-3xl mx-auto max-w-screen-md mt4 mt-14 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 
   h-fit shadow-xl shadow-gray-400'>
    <TopButtons/>
    <Inputs/>
    <TimeLocation/>
    <Temperature/>
    <Forecast title="hourly forecast"/>
    <Forecast title="daily forecast"/>

   </div> 
  );
}

export default App;

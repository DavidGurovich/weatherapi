import {DateTime} from 'luxon';

const API_KEY = '6a514bdeb53691e0aed7971b303f3d9b';
const BASE_URL = 
'https://api.openweathermap.org/data/2.5/';




const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "imperial") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

// const formatForecastWeather = (data) => {
//     let { timezone, daily, hourly} = data;
//     // //daily = daily.slice(1, 6).map((d) => {
//     //     return {
//     //         title: formatToLocalTime(d.dt, timezone, "ccc"),
//     //         temp: d.temp.day,
//     //         icon: d.weather[0].icon,
//     //     };
//     // });

//     hourly = hourly.slice(1, 6).map((d) => {
//         return {
//             title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//             temp: d.temp,
//             icon: d.weather[0].icon,
//         };
//     });

//     return { timezone,  hourly };
// };

// const getFormattedWeatherData = async(searchParams) => {
//     const formattedCurrentWeather = await getWeatherData(
//         'weather',
//         searchParams
//     )
//     .then(formatCurrentWeather);

//     const { lat, lon } = formattedCurrentWeather;

//     const formattedForeCastWeather = await getWeatherData('forecast', {
//         lat,
//         lon,
//         exclude: "current, minutely, alerts",
//         units: searchParams.units,
//     }).then(formatForecastWeather);

//     return { ...formattedCurrentWeather, ...formattedForeCastWeather};
// };

// const formatToLocalTime = (
//     secs,
//     zone,
//     format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
//         DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData


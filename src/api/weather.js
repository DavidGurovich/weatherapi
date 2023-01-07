const key = '6a514bdeb53691e0aed7971b303f3d9b';
const BASE_URL = 
'https://api.openweathermap.org/data/2.5/';

const getData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:key})

    
    return fetch(url)
    .then((res) => res.json())
    
};
const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('')
}




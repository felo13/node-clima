const axios = require('axios');

const API_WT_KEY = '65038d91412e9bd50d6c2a6755f2d8c5';
const units = 'metric';


const getClima = async(lat, lon) => {

    const WT_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_WT_KEY}&units=${units}`;
    const resp = await axios.get(WT_API_URL);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
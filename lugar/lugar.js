const axios = require('axios');

const dataFicticia = {
    powerBy: "deVru",
    Results: [{
        "name": "Ciudad Por Defecto Prueba",
        "type": "city",
        "c": "US",
        "zmw": "10001.5.99999",
        "tz": "America/New_York",
        "tzs": "EST",
        "l": "/q/zmw:10001.5.99999",
        "ll": "40.750134 -73.997009",
        "lat": "40.750134",
        "lon": "-73.997009"
    }, {
        "name": "Madrid",
        "type": "city",
        "c": "ES",
        "zmw": "10001.5.99999",
        "tz": "America/New_York",
        "tzs": "EST",
        "l": "/q/zmw:10001.5.99999",
        "ll": "40.750134 -73.997009",
        "lat": "40.750134",
        "lon": "-73.997009"
    }]
};


const getLugarLatLng = async(direccion) => {

    const API_KEY = '397800c712msh75b8bbd45115fdbp1239d1jsn329a20b54dee';
    const encodedURL = encodeURI(direccion);
    const URL = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`;


    const instance = axios.create({
        baseURL: URL,
        timeout: 1000,
        headers: { 'x-rapidapi-key': API_KEY }
    });
    const resp = await instance.get();
    let data = resp.data;
    if (!data.Results) {
        data = dataFicticia;
    }
    if (data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    const ciudad = data.Results[0];
    const dir = ciudad.name;
    const lat = ciudad.lat;
    const lng = ciudad.lon;

    return {
        dir,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
};
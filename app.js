const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

// Forma que se me ocurrió y funciona
/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => clima.getClima(resp.lat, resp.lng).then(console.log))
    .catch(e => console.log); */

//lima.getClima(35, 139).then(console.log);


// Forma que pidió el profe
const getInfo = async(direccion) => {

    try {
        let locacion = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(locacion.lat, locacion.lng);
        return `El clima de ${locacion.dir} es de ${temperatura} °C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
const opts = {
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
    }
}

const argv = require('yargs')
    .options(opts)
    .help()
    .argv;

module.exports = {
    argv
}
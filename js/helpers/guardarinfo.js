const fs = require('fs');
const { stringify } = require('querystring');

const archivo = './db/data.json';

const guardarArchivo = (data) =>{
    fs.writeFileSync(archivo, JSON/stringify(data));
}

module.exports = {
    guardarArchivo
}
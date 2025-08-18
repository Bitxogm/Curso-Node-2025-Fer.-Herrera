const fs = require('fs');

// Leemos el archivo 
const data = fs.readFileSync('README.md', 'utf8');
// Cambiamos la palabra react de todo el readme por angular
const newData = data.replace(/React/ig, 'bitxo');

// Creamos nuevos fichero modificado
fs.writeFileSync('README-Bitxo.md', newData);
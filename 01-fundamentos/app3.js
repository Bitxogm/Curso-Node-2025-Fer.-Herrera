const fs = require('fs');

// Leemos el archivo 
const content = fs.readFileSync('README.md', 'utf8');
const wordCount = content.split(' ').length;
const reactWordCount = content.match(/react/gi).length;
// /react/: Es la expresión regular que busca la palabra "react".
// g: Es el flag global. Le dice a match que no se detenga en la primera coincidencia, sino que busque todas las apariciones en la cadena.
// i: Es el flag de insensibilidad a mayúsculas y minúsculas. Esto hace que coincida tanto con "react", "React", "REACT", etc., lo cual es muy útil.

console.log(`Palabras :  ${wordCount}`);
console.log(`Palabras React : ${reactWordCount} ` ); // case insentitive







// const { getAge, getUUID } = require('./plugins')
// const templateExports =   require('./js-foundation/01-template');
// const {emailTemplate} = require('./js-foundation/01-template')
// const { getUserById } = require('./js-foundation/callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const {buildMakePerson} = require('./js-foundation/05-factory-functions');
const getPokemonById = require("./js-foundation/06-promises");

getPokemonById(1)
  .then((pokemon) => console.log({pokemon}))
  .catch((error) => console.log(`Check again later ${error}`))
  .finally(() => console.log(`Finalizacion`))


















// !Referencia alas factory functions.
// const makePerson = buildMakePerson({getAge, getUUID})
// const obj = { name: 'Juan', birthday: '1976-01-10' };

// const bitxo = makePerson(obj);
// console.log({bitxo});




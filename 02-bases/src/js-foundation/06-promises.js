
const { http } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await http.get(url);
  return pokemon.name;

  // Esto retorna un promesa , y la retornar una promesa dentro de otra promesa podemos encadenar el .then
  // return fetch(url)
  // .then((response) => response.json())
  // .then((error) => { throw new Error(error)})
  // .then((pokemon) => pokemon.name);
};

module.exports = getPokemonById;
  



import { getPokemonById } from "../../js-foundation/06-promises";

describe('js-foundation/06-promises', () => {

  test('getPokemonById should return a pokemon', async () => {
    const pokemonName = await getPokemonById(1);
    expect(pokemonName).toBe('bulbasaur');
  });

test('should return an error if pokemon does not exits', async () => {
  const pokemonId = 99999999;
  // Jest espera que la función asíncrona lance un error
  await expect(getPokemonById(pokemonId)).rejects.toThrow(`Pokemon not found with id ${pokemonId}`);
});
  
});



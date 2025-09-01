import { heroes } from '../data/heroes.js';  

export const getHeroeById = (id: number) => {
  return heroes.find( heroe => heroe.id === id )
}
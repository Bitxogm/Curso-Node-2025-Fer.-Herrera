import { getHeroeById } from './services/hero.service.js';

const hero = getHeroeById(2);
console.log(hero?.name ?? `Hero not found`)
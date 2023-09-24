import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { OFFERS, PRICE } from '../const.js';

function generateOffer() {
  return {
    id: crypto.randomUUID(),
    title: getRandomArrayElement(OFFERS),
    price: getRandomInteger(PRICE.MIN, PRICE.MAX),
  };
}

export { generateOffer };

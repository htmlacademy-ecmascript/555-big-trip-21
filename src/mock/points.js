import { getRandomInteger, generateDate, getCurrentDate } from '../utils.js';
import { PRICE } from '../const.js';

function generatePoint(type, destinationId, offerIds) {

  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    dateFrom: getCurrentDate(),
    dateTo: generateDate(),
    destination: destinationId,
    isFavorite: getRandomInteger(0, 1),
    offers: offerIds,
    type,
  };
}

export { generatePoint };

import { Offer } from './types';

const capitalizeFirstLetter = (inputWord: string): string=> inputWord[0].toUpperCase() + inputWord.slice(1);

const checkPluralRule = (itemsNumber: number, itemsName: string): string => `${itemsNumber} ${itemsName}${itemsNumber > 1 ? 's' : ''}`;

const sortOffersByCity = (offers: Offer[] | null) => {
  if (offers === null) {
    return null;
  }

  return offers.reduce<Record<string, Offer[]>>((groupedOffers , offer) => {
    const key = offer.city.name;
    const group = groupedOffers[key] ?? [];
    group.push(offer);
    return { ...groupedOffers, [key]: group };
  }, {});
};

const getOffersByCity = (city: string, sortedOffers: Record<string, Offer[]> | null): Offer[] | null => {
  if (sortedOffers === null) {
    return null;
  }

  return city in sortedOffers ? sortedOffers[city] : null;
};

export { capitalizeFirstLetter, checkPluralRule, sortOffersByCity, getOffersByCity };

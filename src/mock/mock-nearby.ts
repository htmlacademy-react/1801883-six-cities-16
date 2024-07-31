import { getUniqRandomElement } from './utils';
import { Offer } from '../types';

const OFFERS_NUMBER = 3;

export const getNearbyOffers = (offers: Offer[]): Offer[] => {
  const nearbyOffers: Offer[] = [];
  const getOffer = getUniqRandomElement<Offer>([...offers]);

  for (let i = 0; i < OFFERS_NUMBER; i++) {
    nearbyOffers.push(getOffer());
  }

  return nearbyOffers;
};

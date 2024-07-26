import { generateOffers } from './mock-offers';
import { getFavorites } from './mock-favorites';
import { getNearbyOffers } from './mock-nearby';
import { Offer, User } from '../types';

export default class MockData {
  #offers: Offer[] = generateOffers();
  #favorites: Offer[] = getFavorites(this.#offers);
  #nearbyOffers: Offer[] = getNearbyOffers(this.#offers);
  #user: User = {
    name: 'Ivan Ivanov',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    isPro: false,
    email: 'ivan@mail.com',
    token: 'T2xpdmVyLmNvbm15ckBnbWFpbC5jb20'
  };

  get offers() {
    return this.#offers;
  }

  get user() {
    return this.#user;
  }

  get favorites() {
    return this.#favorites;
  }

  get nearbyOffers() {
    return this.#nearbyOffers;
  }
}

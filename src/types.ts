import { CITIES, OFFER_TYPES } from './consts';

type Cities = typeof CITIES[number];

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Offer = {
  id: string;
  title: string;
  type: typeof OFFER_TYPES[number];
  price: number;
  city: {
    name: Cities;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
}

type FullOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserShort;
  images: string[];
  maxAdults: number;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

type UserShort = Omit<User, 'email' | 'token'>;

type Comment = {
  id: string;
  date: string;
  user: UserShort;
  comment: string;
  rating: number;
}

export type { Offer, FullOffer, Cities, Location, User, UserShort, Comment };

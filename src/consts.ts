const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const OFFER_TYPES = ['room', 'house', 'hotel', 'apartment'] as const;

const RatingRange = { Min: 0, Max: 5 } as const;

const AppRoute = {
  Main: {
    path: '/',
    title: '6 Cities',
    titleLink: 'to main page',
    additionalClass: 'page--gray page--main'
  },
  Login: {
    path: '/login',
    title: '6 Cities: Authorization',
    titleLink: 'login',
    additionalClass: 'page--gray page--login'
  },
  Favorites: {
    path: '/favorites',
    title: '6 Cities: Favorites offers',
    titleLink: 'to favorites offers',
    additionalClass: 'page--favorites-empty'
  },
  Offer: {
    path: '/offer/:id',
    title: '6 Cities: Offer',
    titleLink: 'to the offer',
    additionalClass: ''
  },
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

const CardClass = {
  Base: {
    ArticleClass: 'cities__card',
    DivImageClass: 'cities__image-wrapper'
  },
  Favorite: {
    ArticleClass: 'favorites__card',
    DivImageClass: 'favorites__image-wrapper'
  },
  Near: {
    ArticleClass: 'near-places__card',
    DivImageClass: 'near-places__image-wrapper'
  }
} as const;

const SortType = {
  Popular: {
    name: 'Popular'
  },
  PriceLow: {
    name: 'Price: low to high'
  },
  PriceHigh: {
    name: 'Price: high to low'
  },
  Rated: {
    name: 'Top rated first'
  }
} as const;

export { CITIES, OFFER_TYPES, AppRoute, AuthorizationStatus, CardClass, RatingRange, SortType };

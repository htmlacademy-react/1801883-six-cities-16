const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const OFFER_TYPES = ['room', 'house', 'hotel', 'apartment'] as const;

const RatingRange = { Min: 0, Max: 5 } as const;

const AppRoute = {
  Main: {
    path: '/',
    title: 'to main page',
    additionalClass: 'page--gray page--main'
  },
  Login: {
    path: '/login',
    title: 'login',
    additionalClass: 'page--gray page--login'
  },
  Favorites: {
    path: '/favorites',
    title: 'to favorites offers',
    additionalClass: 'page--favorites-empty'
  },
  Offer: {
    path: '/offer/:id',
    title: 'to the offer',
    additionalClass: ''
  },
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

export { CITIES, OFFER_TYPES, AppRoute, SortType, RatingRange };

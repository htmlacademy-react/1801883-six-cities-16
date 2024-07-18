const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

const SortTypes = {
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

export { CITIES, SortTypes };

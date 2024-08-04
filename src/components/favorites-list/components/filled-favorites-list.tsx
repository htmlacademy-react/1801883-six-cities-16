import CityFavoriteItem from './city-favorite-item';
import { sortOffersByCity } from '../../../utils';
import { CITIES } from '../../../consts';
import { Offer, Cities } from '../../../types';

type FilledFavoritesListProps = {
  favoriteOffers: Offer[];
  handlerCityClick: (city: Cities) => void;
}


export default function FilledFavoritesList({favoriteOffers, handlerCityClick}: FilledFavoritesListProps): JSX.Element {
  const sortedOffersByCity = sortOffersByCity(favoriteOffers) as Record<string, Offer[]>;

  return(
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          CITIES.map((city) =>
            city in sortedOffersByCity
              ? <CityFavoriteItem key={ city } city={ city } favoriteOffers={ sortedOffersByCity[city] } handlerCityClick={ handlerCityClick }/>
              : '')
        }
      </ul>
    </>
  );
}

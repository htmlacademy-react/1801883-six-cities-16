import EmptyFavoritesList from './components/empty-favorites-list';
import FilledFavoritesList from './components/filled-favorites-list';
import { Offer } from '../../types';
import { CITIES } from '../../consts';

type FavoritesListProps = {
  isEmptyList: boolean;
  favoriteOffers: Offer[] | null;
  handlerCityClick: (city: typeof CITIES[number]) => void;
}


export default function FavoritesList({isEmptyList, favoriteOffers, handlerCityClick}: FavoritesListProps): JSX.Element {

  return (
    <section className={`favorites ${isEmptyList ? 'favorites--empty' : ''}`}>
      {isEmptyList
        ? <EmptyFavoritesList />
        : <FilledFavoritesList favoriteOffers={ favoriteOffers as Offer[] } handlerCityClick={ handlerCityClick }/>}
    </section>
  );
}

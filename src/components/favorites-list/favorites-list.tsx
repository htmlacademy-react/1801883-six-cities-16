import EmptyFavoritesList from './components/empty-favorites-list';
import FilledFavoritesList from './components/filled-favorites-list';
import { Offer, Cities } from '../../types';

type FavoritesListProps = {
  isEmptyList: boolean;
  favoriteOffers: Offer[] | null;
  handlerCityClick: (city: Cities) => void;
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

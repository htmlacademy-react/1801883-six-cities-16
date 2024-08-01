import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import { Offer } from '../../types';
import { CITIES } from '../../consts';

type FavoritesPageProps = {
  favoriteOffers: Offer[] | null;
  handlerCityClick: (city: typeof CITIES[number]) => void;
}


export default function FavoritesPage({favoriteOffers, handlerCityClick}: FavoritesPageProps): JSX.Element {
  const isEmptyList = favoriteOffers === null || favoriteOffers.length === 0;

  return (
    <>
      <main className={`page__main page__main--favorites ${isEmptyList ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <FavoritesList favoriteOffers={favoriteOffers} isEmptyList={ isEmptyList } handlerCityClick={handlerCityClick}/>
        </div>
      </main>

      <Footer />
    </>
  );
}

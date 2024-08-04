import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import { Offer, Cities } from '../../types';

type FavoritesPageProps = {
  favoriteOffers: Offer[] | null;
  handleCityClick: (city: Cities) => void;
}


export default function FavoritesPage({favoriteOffers, handleCityClick}: FavoritesPageProps): JSX.Element {
  const isEmptyList = favoriteOffers === null || favoriteOffers.length === 0;

  return (
    <>
      <main className={`page__main page__main--favorites ${isEmptyList ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <FavoritesList favoriteOffers={favoriteOffers} isEmptyList={ isEmptyList } handlerCityClick={handleCityClick}/>
        </div>
      </main>

      <Footer />
    </>
  );
}

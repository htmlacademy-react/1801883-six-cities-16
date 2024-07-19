import Header from '../../components/header/header';
import TabsList from '../../components/tabs-list/tabs-list';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { Offer, User } from '../../types';

type MainProps = {
  offers: Offer[];
  user?: User;
  userFavorites?: Offer[];
}

export default function MainPage({offers, user, userFavorites}: MainProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      {user
        ? <Header user={ user } favoritesNumber={ userFavorites ? userFavorites.length : 0 } />
        : <Header /> }

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <TabsList />

        <div className="cities">
          <div className="cities__places-container container">
            <OffersList offers={ offers } />
            <Map />
          </div>
        </div>

      </main>
    </div>
  );
}

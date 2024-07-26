
import Layout from '../../pages/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Offer, User } from '../../types';
import { AppRoute } from '../../consts';

type AppProps = {
  offers: Offer[] | null;
  user: User | null;
  userFavorites: Offer[] | null;
  nearbyOffers: Offer[];
}


export default function App({offers, user, userFavorites, nearbyOffers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ AppRoute.Main.path } element={ <Layout user={ user } favoritesNumber={ userFavorites ? userFavorites.length : 0 }/> }>
          <Route index element={ <MainPage offers={ offers }/> }/>
          <Route path={ AppRoute.Login.path } element={ <LoginPage /> } />
          <Route path={ AppRoute.Favorites.path } element={ <FavoritesPage /> } />
          <Route path={ AppRoute.Offer.path } element={ <OfferPage nearOffers={ nearbyOffers }/> } />
        </Route>

        <Route path='*' element={ <ErrorPage /> } />
      </Routes>
    </BrowserRouter>

  );
}

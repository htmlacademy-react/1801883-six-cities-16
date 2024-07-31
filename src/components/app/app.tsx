
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import Layout from '../../pages/layout/layout';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import { Offer, User } from '../../types';
import { CITIES, AppRoute, AuthorizationStatus } from '../../consts';

type AppProps = {
  offers: Offer[] | null;
  user: User | null;
  userFavorites: Offer[] | null;
  nearbyOffers: Offer[];
}


export default function App({offers, user, userFavorites, nearbyOffers}: AppProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState<typeof CITIES[number]>(CITIES[0]);
  const authorizationStatus = user === null ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ AppRoute.Main.path } element={ <Layout user={ user } favoritesNumber={ userFavorites ? userFavorites.length : 0 }/> }>
            <Route index element={ <MainPage offers={ offers } currentCity={ currentCity } handlerTabCLick={ setCurrentCity } /> }/>
            <Route path={ AppRoute.Login.path } element={ <LoginPage currentCity={ currentCity }/> } />
            <Route path={ AppRoute.Favorites.path }
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} redirectRoute={AppRoute.Login.path}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={ AppRoute.Offer.path } element={ <OfferPage offers={ offers } nearOffers={ nearbyOffers }/> } />
          </Route>

          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

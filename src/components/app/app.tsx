
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
import { sortOffersByCity, getOffersByCity } from '../../utils';
import { Offer, Cities, FullOffer, User, Comment } from '../../types';
import { CITIES, AppRoute, AuthorizationStatus } from '../../consts';

type AppProps = {
  offers: Offer[] | null;
  user: User | null;
  userFavorites: Offer[] | null;
  getFullOffer: (id: string) => FullOffer | null;
  getComments: () => Comment[] | null;
  nearbyOffers: Offer[];
}


export default function App({offers, user, userFavorites, getFullOffer, getComments, nearbyOffers}: AppProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState<Cities>(CITIES[0]);
  const sortedOffersByCity = sortOffersByCity(offers);
  const authorizationStatus = user === null ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ AppRoute.Main.path } element={ <Layout user={ user } favoritesNumber={ userFavorites ? userFavorites.length : 0 } /> }>
            <Route index element={ <MainPage offers={ getOffersByCity(currentCity, sortedOffersByCity) } currentCity={ currentCity } handleTabCLick={ setCurrentCity } /> }/>
            <Route path={ AppRoute.Login.path } element={ <LoginPage currentCity={ currentCity }/> } />
            <Route path={ AppRoute.Favorites.path }
              element={
                <PrivateRoute authorizationStatus={ authorizationStatus } redirectRoute={AppRoute.Login.path}>
                  <FavoritesPage favoriteOffers={ userFavorites } handleCityClick={ setCurrentCity } />
                </PrivateRoute>
              }
            />
            <Route path={ AppRoute.Offer.path } element={
              <OfferPage
                authorizationStatus={ authorizationStatus }
                getFullOffer={ getFullOffer }
                getComments={ getComments }
                nearOffers={ nearbyOffers }
              />
            }
            />
          </Route>

          <Route path='*' element={ <ErrorPage /> } />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

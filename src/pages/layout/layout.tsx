import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { User } from '../../types';
import { AppRoute } from '../../consts';

type LayoutProps = {
  user: User | null;
  favoritesNumber: number;
}


const getAdditionalClass = (route: string, favoritesNumber: number): string => {
  switch (route) {
    case AppRoute.Main.path:
      return AppRoute.Main.additionalClass;
    case AppRoute.Login.path:
      return AppRoute.Login.additionalClass;
    case AppRoute.Favorites.path:
      return favoritesNumber === 0 ? AppRoute.Favorites.additionalClass : '';
    default:
      return '';
  }
};

const getTitle = (route: string): string => {
  switch (route) {
    case AppRoute.Main.path:
      return AppRoute.Main.title;
    case AppRoute.Login.path:
      return AppRoute.Login.title;
    case AppRoute.Favorites.path:
      return AppRoute.Favorites.title;
    default:
      return AppRoute.Offer.title;
  }
};

export default function Layout({user, favoritesNumber}: LayoutProps): JSX.Element {
  const currentPagePath = useLocation().pathname;

  return (
    <div className={`page ${getAdditionalClass(currentPagePath, favoritesNumber)}`}>
      <Helmet>
        <title>{getTitle(currentPagePath)}</title>
      </Helmet>
      <Header
        user={ user }
        favoritesNumber={ favoritesNumber }
        isLoginVisible={ currentPagePath !== AppRoute.Login.path }
      />
      <Outlet />
    </div>
  );
}

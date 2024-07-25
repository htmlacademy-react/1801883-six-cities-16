import { Outlet, useLocation } from 'react-router-dom';
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
      return 'page--gray page--main';
    case AppRoute.Login.path:
      return 'page--gray page--login';
    case AppRoute.Favorites.path:
      return favoritesNumber === 0 ? 'page--favorites-empty' : '';
    default:
      return '';
  }
};

export default function Layout({user, favoritesNumber}: LayoutProps): JSX.Element {
  const currentPagePath = useLocation().pathname;

  return (
    <div className={`page ${getAdditionalClass(currentPagePath, favoritesNumber)}`}>
      <Header
        user={ user }
        favoritesNumber={ favoritesNumber }
        isLoginVisible={ currentPagePath !== AppRoute.Login.path }
      />
      <Outlet />
    </div>
  );
}

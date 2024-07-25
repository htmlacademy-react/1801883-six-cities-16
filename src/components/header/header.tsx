import { Link } from 'react-router-dom';
import UserInfo from './components/user-info';
import { User } from '../../types';
import { AppRoute } from '../../consts';

type HeaderProps = {
  user: User | null;
  favoritesNumber: number;
  isLoginVisible: boolean;
}


export default function Header({user, favoritesNumber, isLoginVisible}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main.path} title={AppRoute.Main.title} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>

          {isLoginVisible && <UserInfo user={ user } favoritesNumber={ favoritesNumber } />}
        </div>
      </div>
    </header>
  );
}

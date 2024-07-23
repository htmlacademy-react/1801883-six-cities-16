import UserInfo from './components/user-info';
import { User } from '../../types';

type HeaderProps = {
  isLoginVisible?: boolean;
  user?: User;
  favoritesNumber?: number;
}

export default function Header({isLoginVisible = true, user, favoritesNumber}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>

          {isLoginVisible
            ? (
              <nav className="header__nav">
                {user
                  ? <UserInfo isLogged = {Boolean(user)} email = {user.email} favoritesNumber = {favoritesNumber} />
                  : <UserInfo isLogged = {Boolean(user)} />}
              </nav>
            )
            : ''}

        </div>
      </div>
    </header>
  );
}

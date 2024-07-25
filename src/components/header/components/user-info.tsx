import { Link } from 'react-router-dom';
import Avatar from './avatar';
import { User } from '../../../types';
import { AppRoute } from '../../../consts';

type UserInfoProps = {
  user: User | null;
  favoritesNumber: number;
}


function SignOut(): JSX.Element {
  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

export default function UserInfo({user, favoritesNumber}: UserInfoProps): JSX.Element {
  const isLogged = user !== null;
  const email = isLogged ? user.email : null;
  const route = isLogged ? AppRoute.Favorites : AppRoute.Login;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={ route.path } title={ route.title } className="header__nav-link header__nav-link--profile">
            <Avatar />

            {isLogged
              ?
              <>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{favoritesNumber}</span>
              </>
              :
              <span className="header__login">Sign in</span>}
          </Link>
        </li>

        {isLogged && <SignOut />}

      </ul>
    </nav>
  );
}

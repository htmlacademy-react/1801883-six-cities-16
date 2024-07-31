import { Link } from 'react-router-dom';
import { CITIES, AppRoute } from '../../consts';

type LoginPageProps = {
  currentCity: typeof CITIES[number];
}

export default function LoginPage({currentCity}: LoginPageProps): JSX.Element {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">

            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>

        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={ AppRoute.Main.path }>
              <span>{currentCity}</span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

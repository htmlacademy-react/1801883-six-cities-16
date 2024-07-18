import MainPage from '../../pages/main-page/main-page';
import { User } from '../../types';

type AppProps = {
  offers: string[];
  user?: User;
  userFavorites?: string[];
}


export default function App({offers, user, userFavorites}: AppProps): JSX.Element {
  return (
    <MainPage
      offers = {offers}
      user = {user}
      userFavorites = {userFavorites}
    />
  );
}

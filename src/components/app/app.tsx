import MainPage from '../../pages/main-page/main-page';
import { Offer, User } from '../../types';

type AppProps = {
  offers: Offer[];
  user?: User;
  userFavorites?: Offer[];
}


export default function App({offers, user, userFavorites}: AppProps): JSX.Element {
  return (
    <MainPage
      offers={ offers }
      user={ user }
      userFavorites={ userFavorites }
    />
  );
}

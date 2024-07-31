import TabsList from '../../components/tabs-list/tabs-list';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { Offer } from '../../types';
import { CITIES } from '../../consts';

type MainProps = {
  offers: Offer[] | null;
  currentCity: typeof CITIES[number];
  handlerTabCLick: (city: typeof CITIES[number]) => void;
}

export default function MainPage({offers, currentCity, handlerTabCLick}: MainProps): JSX.Element {
  const isEmptyList = (offers === null || offers.length === 0);

  return (
    <main className={`page__main page__main--index ${isEmptyList ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <TabsList currentCity={ currentCity } handlerTabCLick={ handlerTabCLick }/>

      <div className="cities">
        <div className={`cities__places-container container ${isEmptyList ? 'cities__places-container--empty' : ''}`}>

          <OffersList city={ currentCity } offers={ offers } />
          <Map offers={ offers }/>

        </div>
      </div>
    </main>
  );
}

import TabsList from '../../components/tabs-list/tabs-list';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { Offer, Cities } from '../../types';

type MainPageProps = {
  offers: Offer[] | null;
  currentCity: Cities;
  handleTabCLick: (city: Cities) => void;
}

export default function MainPage({offers, currentCity, handleTabCLick}: MainPageProps): JSX.Element {
  const isEmptyList = (offers === null || offers.length === 0);

  return (
    <main className={`page__main page__main--index ${isEmptyList ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <TabsList currentCity={ currentCity } handleTabCLick={ handleTabCLick }/>

      <div className="cities">
        <div className={`cities__places-container container ${isEmptyList ? 'cities__places-container--empty' : ''}`}>

          <OffersList city={ currentCity } offers={ offers } />
          <Map offers={ offers }/>

        </div>
      </div>
    </main>
  );
}

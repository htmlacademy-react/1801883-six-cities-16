import { Offer } from '../../types';

type MapProps = {
  offers: Offer[] | null;
  isOfferPage?: boolean;
}


export default function Map({offers, isOfferPage = false}: MapProps): JSX.Element{
  const isHidden = offers === null || offers.length === 0;

  return isOfferPage
    ? (
      <section className="offer__map map"></section>
    )
    : (
      <div className="cities__right-section">
        {!isHidden && <section className="cities__map map"></section>}
      </div>
    );
}

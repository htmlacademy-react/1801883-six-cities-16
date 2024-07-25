import { Offer } from '../../types';

type MapProps = {
  offers: Offer[] | null;
}


export default function Map({offers}: MapProps): JSX.Element{
  const isHidden = offers === null || offers.length === 0;

  return (
    <div className="cities__right-section">
      {!isHidden && <section className="cities__map map"></section>}
    </div>
  );
}

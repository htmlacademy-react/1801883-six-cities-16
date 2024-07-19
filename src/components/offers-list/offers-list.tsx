import SortingForm from '../sorting-form/sorting-form';
import OfferItem from '../offer-item/offer-item';
import { Offer } from '../../types';

type OffersNumberProps = {
  offersNumber: number;
  city: string;
}

type OffersListProps = {
  offers: Offer[];
}


function OffersNumber({offersNumber, city}: OffersNumberProps): JSX.Element {
  return(
    <b className="places__found">{offersNumber} places to stay in {city}</b>
  );
}

export default function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <OffersNumber offersNumber={ 228 } city = {'Paris'}/>

      <SortingForm />

      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer: Offer) => (
          <OfferItem
            key = { offer.id }
            title={ offer.title }
            type={ offer.type }
            price={ offer.price }
            isFavorite={ offer.isFavorite }
            isPremium={ offer.isPremium }
            rating={ offer.rating }
            previewImage={ offer.previewImage }
          />
        ))}
      </div>
    </section>
  );
}

import SortingForm from '../sorting-form/sorting-form';
import OfferItem from '../offer-item/offer-item';
import { Offer } from '../../types';

type OffersNumberProps = {
  offersNumber: number;
  city: string;
}

type OffersListProps = {
  offers: Offer[];
  isNearOffersList?: boolean;
}


function OffersNumber({offersNumber, city}: OffersNumberProps): JSX.Element {
  return(
    <b className="places__found">{offersNumber} places to stay in {city}</b>
  );
}

export default function OffersList({offers, isNearOffersList = false}: OffersListProps): JSX.Element {
  return (
    <section className={`${isNearOffersList ? 'near-places' : 'cities__places'} places`}>
      {!isNearOffersList
        ? (
          <>
            <h2 className="visually-hidden">Places</h2>
            <OffersNumber offersNumber={ 228 } city = {'Paris'}/>
            <SortingForm />
          </>
        )
        : (
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
        )}


      <div className={isNearOffersList ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
        {offers.map((offer: Offer) => (
          <OfferItem
            key={ offer.id }
            isNearOffer={ isNearOffersList }
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

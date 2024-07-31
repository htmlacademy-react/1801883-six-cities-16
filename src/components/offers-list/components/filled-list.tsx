import SortingForm from '../../sorting-form/sorting-form';
import OfferItem from '../../offer-item/offer-item';
import { Offer } from '../../../types';

type FilledListProps = {
  city: string;
  offers: Offer[];
  isNearOffersList: boolean;
}


export default function FilledList({city, offers, isNearOffersList}: FilledListProps): JSX.Element {
  return(
    <>
      {isNearOffersList
        ? (
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
        )
        : (
          <>
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city}</b>
            <SortingForm />
          </>
        )}


      <div className={isNearOffersList ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
        {offers.map((offer: Offer) => (
          <OfferItem
            key={ offer.id }
            id={ offer.id }
            cardType={ isNearOffersList ? 'Near' : 'Base' }
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
    </>
  );
}

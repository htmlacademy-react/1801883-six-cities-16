import { Link } from 'react-router-dom';
import Premium from './components/premium';
import Price from './components/price';
import BookmarkButton from './components/bookmark-button';
import Rating from './components/rating';
import Title from './components/title';
import Type from './components/type';
import { OFFER_TYPES, AppRoute } from '../../consts';

type OfferItemProps = {
  id: string;
  isNearOffer: boolean;
  title: string;
  type: typeof OFFER_TYPES[number];
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}


export default function OfferItem({id, isNearOffer, title, type, price, isFavorite, isPremium, rating, previewImage }: OfferItemProps): JSX.Element {
  return (
    <article className={`${isNearOffer ? 'near-places__card' : 'cities__card'} place-card`}>
      {isPremium ? <Premium /> : ''}

      <div className={`${isNearOffer ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={ AppRoute.Offer.path.replace(':id', id) } title={ AppRoute.Offer.titleLink }>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price price={ price }/>
          <BookmarkButton isFavorite={ isFavorite } />
        </div>

        <Rating rating={ rating }/>
        <Title title={ title } />
        <Type type={ type } />
      </div>
    </article>
  );
}

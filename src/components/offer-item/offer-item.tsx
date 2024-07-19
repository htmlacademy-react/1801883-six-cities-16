import Premium from './components/premium';
import Price from './components/price';
import BookmarkButton from './components/bookmark-button';
import Rating from './components/rating';
import Title from './components/title';
import Type from './components/type';
import { OFFER_TYPES } from '../../consts';

type OfferItemProps = {
  title: string;
  type: typeof OFFER_TYPES[number];
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}


export default function OfferItem({title, type, price, isFavorite, isPremium, rating, previewImage }: OfferItemProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {isPremium ? <Premium /> : ''}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
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

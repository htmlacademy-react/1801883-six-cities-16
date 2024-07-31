import { Link } from 'react-router-dom';
import Premium from './components/premium';
import PreviewImage from './components/preview-image';
import Price from './components/price';
import BookmarkButton from './components/bookmark-button';
import Rating from './components/rating';
import Title from './components/title';
import Type from './components/type';
import { OFFER_TYPES, AppRoute, CardClass } from '../../consts';

type OfferItemProps = {
  id: string;
  cardType: keyof typeof CardClass;
  title: string;
  type: typeof OFFER_TYPES[number];
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}


export default function OfferItem({id, cardType, title, type, price, isFavorite, isPremium, rating, previewImage }: OfferItemProps): JSX.Element {
  return (
    <article className={`${CardClass[cardType].ArticleClass} place-card`}>
      {isPremium && <Premium />}

      <div className={`${CardClass[cardType].DivImageClass} place-card__image-wrapper`}>
        <Link to={ AppRoute.Offer.path.replace(':id', id) } title={ AppRoute.Offer.titleLink }>
          <PreviewImage link={ previewImage } />
        </Link>
      </div>

      <div className={`place-card__info ${(cardType === 'Favorite') && 'favorites__card-info'}`}>
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

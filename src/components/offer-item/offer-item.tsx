import { Link } from 'react-router-dom';
import Premium from './components/premium';
import PreviewImage from './components/preview-image';
import Price from './components/price';
import BookmarkButton from './components/bookmark-button';
import Rating from './components/rating';
import Title from './components/title';
import Type from './components/type';
import { Offer } from '../../types';
import { AppRoute, CardClass } from '../../consts';

type OfferItemProps = {
  offer: Offer;
  cardType: keyof typeof CardClass;
  handleOfferMouseOver?: (id: string | null) => void;
}


export default function OfferItem({offer, cardType, handleOfferMouseOver}: OfferItemProps): JSX.Element {
  const {id, title, type, price, isFavorite, isPremium, rating, previewImage} = offer;

  return (
    <article
      className={`${CardClass[cardType].ArticleClass} place-card`}
      {... (cardType === 'Base' && handleOfferMouseOver)
        ? {
          onMouseEnter: () => handleOfferMouseOver(id),
          onMouseLeave: () => handleOfferMouseOver(null)
        }
        : {}
      }
    >

      {isPremium && <Premium />}

      <div className={`${CardClass[cardType].DivImageClass} place-card__image-wrapper`}>
        <Link to={ AppRoute.Offer.path.replace(':id', id) } title={ AppRoute.Offer.titleLink }>
          <PreviewImage link={ previewImage } isFavoriteCard={ cardType === 'Favorite' } />
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

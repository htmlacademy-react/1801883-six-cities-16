import { useParams } from 'react-router-dom';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Premium from '../../components/offer-item/components/premium';
import BookmarkButton from '../../components/offer-item/components/bookmark-button';
import Rating from '../../components/offer-item/components/rating';
import Price from '../../components/offer-item/components/price';
import OfferComments from '../../components/offer-comments/offer-comments';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import ErrorPage from '../error-page/error-page';
import { capitalizeFirstLetter, checkPluralRule } from '../../utils';
import { AuthorizationStatus } from '../../consts';
import { Offer, FullOffer, Comment } from '../../types';

type OfferPageProps = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  getFullOffer: (id: string) => FullOffer | null;
  getComments: () => Comment[] | null;
  nearOffers: Offer[];
}


export default function OfferPage({authorizationStatus, getFullOffer, getComments, nearOffers}: OfferPageProps): JSX.Element {
  const offerId = useParams().id;
  const displayedOffer = offerId ? getFullOffer(offerId) : null;

  if(displayedOffer) {
    const {title, type, price, isFavorite, isPremium, rating, bedrooms, goods, images, maxAdults} = displayedOffer ?? {};

    return (
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={ images } />

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <Premium isBigElement />}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton isFavorite={ isFavorite } isBigButton />
              </div>

              <Rating rating={ rating } type='BigElement' />

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{capitalizeFirstLetter(type)}</li>
                <li className="offer__feature offer__feature--bedrooms">{checkPluralRule(bedrooms, 'Bedroom')}</li>
                <li className="offer__feature offer__feature--adults">{`Max ${checkPluralRule(maxAdults, 'adult')}`}</li>
              </ul>

              <Price price={ price } isBigElement />


              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((good) => (<li className="offer__inside-item" key={ good }>{good}</li>))
                  }
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>


              <OfferComments authorizationStatus={ authorizationStatus } getComments={ getComments } />
            </div>
          </div>

          <Map offers={ null } isOfferPage />
        </section>

        <div className="container">
          <OffersList city={displayedOffer.city.name} offers={ nearOffers } isNearOffersList />
        </div>
      </main>
    );
  }

  return <ErrorPage />;
}

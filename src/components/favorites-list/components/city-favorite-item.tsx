import OfferItem from '../../offer-item/offer-item';
import { Link } from 'react-router-dom';
import { Offer } from '../../../types';
import { CITIES, AppRoute } from '../../../consts';

type CityWrapperProps = {
  city: typeof CITIES[number];
  favoriteOffers: Offer[];
  handlerCityClick: (city: typeof CITIES[number]) => void;
}


export default function CityFavoriteItem({city, favoriteOffers, handlerCityClick}: CityWrapperProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={ AppRoute.Main.path } onClick={ ()=>handlerCityClick(city) }>
            <span>{city}</span>
          </Link>
        </div>
      </div>

      <div className="favorites__places">
        {
          favoriteOffers.map(
            (offer) =>
              (
                <OfferItem
                  key={ offer.id }
                  offer={ offer }
                  cardType='Favorite'
                />
              )
          )
        }
      </div>
    </li>
  );
}

import { Cities } from '../../../types';

type EmptyListProps = {
  city: Cities;
}


export default function EmptyList({city}: EmptyListProps): JSX.Element {
  return(
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
    </div>
  );
}

import { RatingRange } from '../../../consts';

type RatingProps = {
  rating: number;
  isBigElement?: boolean;
}


export default function Rating({rating, isBigElement = false}: RatingProps): JSX.Element {
  const ratingInPercent: number = Math.round((rating / (RatingRange.Max - RatingRange.Min)) * 100);
  const extraClass = isBigElement ? 'offer__' : 'place-card__';

  return (
    <div className={`${extraClass}rating rating`}>
      <div className={`${extraClass}stars rating__stars`}>
        <span style={{ width: `${ratingInPercent}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {
        isBigElement
          ? <span className="offer__rating-value rating__value">{rating}</span>
          : ''
      }
    </div>
  );
}

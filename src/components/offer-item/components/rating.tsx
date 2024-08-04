import { RatingRange } from '../../../consts';

type RatingProps = {
  rating: number;
  type: keyof typeof RatingClass;
}

const RatingClass = {
  Base: 'place-card__',
  BigElement: 'offer__',
  Comment: 'reviews__'
} as const;


export default function Rating({rating, type}: RatingProps): JSX.Element {
  const ratingInPercent: number = (Math.round(rating) / (RatingRange.Max - RatingRange.Min)) * 100;
  const isBigElement = type === 'BigElement';
  const extraClass = RatingClass[type];

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

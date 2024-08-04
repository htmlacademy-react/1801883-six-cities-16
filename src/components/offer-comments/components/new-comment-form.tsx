import { useState } from 'react';
import RatingStar from './rating-star';

const StartsProperties = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
] as const;

const CharactersLimit = {
  Min: 50,
  Max: 300
} as const;


export default function NewCommentForm(): JSX.Element {
  const [commentValue, setCommentValue] = useState({rating: 0, text: ''});
  const {rating, text} = commentValue;
  const isSubmitEnable = text.length >= CharactersLimit.Min && text.length <= CharactersLimit.Max && rating;

  const handleStarChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue({...commentValue, rating: Number(evt.target.value)});
  };

  const handleTextChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue({...commentValue, text: evt.target.value});
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {
          StartsProperties.map(
            ({value, title}) => <RatingStar key={ title } value={ value } title={ title } handleStarChange={ handleStarChange }/>
          )
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={ text }
        onChange={ handleTextChange }
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ !isSubmitEnable }>Submit</button>
      </div>

    </form>
  );
}

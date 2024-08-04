import Rating from '../../offer-item/components/rating';
import { Comment } from '../../../types';

type OtherUserCommentProps = {
  userComment: Comment;
}


export default function OtherUserComment({userComment}: OtherUserCommentProps): JSX.Element {
  const {date, user, comment, rating} = userComment;
  const formattedDate = new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'}).format(new Date(date));
  const dateTime = date.split('T')[0];

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ user.avatarUrl } width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>

      <div className="reviews__info">
        <Rating rating={ rating } type='Comment'/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={ dateTime }>{formattedDate}</time>
      </div>
    </li>
  );
}

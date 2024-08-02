import OtherUserComment from './components/other-user-comment';
import NewCommentForm from './components/new-comment-form';
import { AuthorizationStatus } from '../../consts';

type OfferCommentsProps = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
}


export default function OfferComments({authorizationStatus}: OfferCommentsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{1111}</span></h2>
      <ul className="reviews__list">
        <OtherUserComment />
        <OtherUserComment />
      </ul>

      {
        (authorizationStatus === AuthorizationStatus.Auth) && <NewCommentForm />
      }
    </section>
  );
}

import OtherUserComment from './components/other-user-comment';
import NewCommentForm from './components/new-comment-form';
import { AuthorizationStatus } from '../../consts';
import { Comment } from '../../types';

type OfferCommentsProps = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  getComments: () => Comment[] | null;
}

const MAX_COMMENTS_NUMBER = 10;


export default function OfferComments({authorizationStatus, getComments}: OfferCommentsProps): JSX.Element {
  const comments = getComments();
  const commentsNumber = comments ? comments.length : 0;

  if (comments && comments.length > MAX_COMMENTS_NUMBER) {
    comments.splice(MAX_COMMENTS_NUMBER);
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsNumber}</span></h2>
      {
        comments && comments.length > 0
          ? (
            <ul className="reviews__list">
              {
                comments.map((comment) => <OtherUserComment key={ comment.id } userComment={ comment }/>)
              }
            </ul>
          )
          : ''
      }


      {
        (authorizationStatus === AuthorizationStatus.Auth) && <NewCommentForm />
      }
    </section>
  );
}

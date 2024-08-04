import { Link } from 'react-router-dom';

type TitleProps = {
  title: string;
  currentLink: {
    path: string;
    title: string;
  };
}


export default function Title({title, currentLink}: TitleProps): JSX.Element {
  return (
    <h2 className="place-card__name">
      <Link to={ currentLink.path } title={ currentLink.title }>{title}</Link>
    </h2>
  );
}

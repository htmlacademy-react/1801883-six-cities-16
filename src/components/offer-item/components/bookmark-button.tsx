const IconProperty = {
  Base: {
    Size: [18, 19],
    Class: 'place-card__'
  },
  Big: {
    Size: [31, 30],
    Class: 'offer__'
  }
} as const;

type BookmarkButtonProps = {
  isFavorite: boolean;
  isBigButton?: boolean;
}


export default function BookmarkButton({isFavorite, isBigButton = false}: BookmarkButtonProps): JSX.Element {
  const [width, height] = isBigButton ? IconProperty.Big.Size : IconProperty.Base.Size;
  const extraClass = isBigButton ? IconProperty.Big.Class : IconProperty.Base.Class;

  return (
    <button className={`${extraClass}bookmark-button button ${isFavorite && `${extraClass}bookmark-button--active`}`} type="button">
      <svg className={`${extraClass}bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

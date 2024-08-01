const ImageSize = {
  Base: [260, 200],
  Favorite: [150, 110],
} as const;

type PreviewImageProps = {
  link: string;
  isFavoriteCard: boolean;
}


export default function PreviewImage({link, isFavoriteCard}: PreviewImageProps): JSX.Element {
  const [width, height] = isFavoriteCard ? ImageSize.Favorite : ImageSize.Base;

  return (
    <img className="place-card__image" src={link} width={width} height={height} alt="Place image" />
  );
}

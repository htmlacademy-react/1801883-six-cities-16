const MAX_IMAGES_NUMBER = 6;

type OfferGallery = {
  images: string[];
}


export default function OfferGallery({images}: OfferGallery): JSX.Element {
  if (images.length > MAX_IMAGES_NUMBER) {
    images.splice(MAX_IMAGES_NUMBER);
  }

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.map(
            (image) => (
              <div className="offer__image-wrapper" key={image}>
                <img
                  className="offer__image"
                  src={ image }
                  alt="Photo studio"
                />
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

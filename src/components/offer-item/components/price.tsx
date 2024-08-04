type PriceProps = {
  price: number;
  isBigElement?: boolean;
}


export default function Price({price, isBigElement = false}: PriceProps): JSX.Element {
  const extraClass = isBigElement ? 'offer__' : 'place-card__';

  return (
    <div className={`${extraClass}price`}>
      <b className={`${extraClass}price-value`}>&euro;{price}</b>
      <span className={`${extraClass}price-text`}>{!isBigElement && ' /'}&nbsp;night</span>
    </div>
  );
}

import EmptyList from './components/empty-list';
import FilledList from './components/filled-list';
import { Offer } from '../../types';
import { CITIES } from '../../consts';

type OffersListProps = {
  city: typeof CITIES[number];
  offers: Offer[] | null;
  isNearOffersList?: boolean;
}

const SectionClass = {
  Empty: 'cities__no-places',
  Near: 'near-places places',
  Default: 'cities__places places'
} as const;


const getSectionClass = (isEmptyList: boolean, isNearOffersList: boolean): string => {
  if (isEmptyList) {
    return SectionClass.Empty;
  } else if (isNearOffersList) {
    return SectionClass.Near;
  }
  return SectionClass.Default;
};


export default function OffersList({city, offers, isNearOffersList = false}: OffersListProps): JSX.Element {
  const isEmptyList = offers === null || offers.length === 0;

  return (
    <section className={getSectionClass(isEmptyList, isNearOffersList)}>
      {isEmptyList
        ? <EmptyList city={ city }/>
        : <FilledList city={ city } offers={ offers } isNearOffersList={ isNearOffersList }/>}
    </section>
  );
}

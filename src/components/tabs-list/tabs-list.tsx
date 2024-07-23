import { CITIES } from '../../consts';

type TabsItemProps = {
  city: string;
  isActiv: boolean;
}


function TabsItem({city, isActiv}: TabsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActiv ? 'tabs__item--active' : ''}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default function TabsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city: string): JSX.Element =>
            <TabsItem key = {city} city = {city} isActiv = {city === CITIES[0]} />
          )}
        </ul>
      </section>
    </div>
  );
}

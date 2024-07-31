import { CITIES } from '../../consts';

type TabsItemProps = {
  city: typeof CITIES[number];
  isActiv: boolean;
  handlerTabCLick: (city: typeof CITIES[number]) => void;
}

type TabsListProps = {
  currentCity: typeof CITIES[number];
  handlerTabCLick: (city: typeof CITIES[number]) => void;
}


function TabsItem({city, isActiv, handlerTabCLick}: TabsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <div
        className={`locations__item-link tabs__item ${isActiv ? 'tabs__item--active' : ''}`}
        onClick={ ()=> handlerTabCLick(city) }
      >
        <span>{city}</span>
      </div>
    </li>
  );
}

export default function TabsList({currentCity, handlerTabCLick}: TabsListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city): JSX.Element => (
            <TabsItem
              key={ city }
              city={ city }
              isActiv={ city === currentCity }
              handlerTabCLick={ handlerTabCLick }
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

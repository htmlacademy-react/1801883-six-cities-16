import { Cities } from '../../types';
import { CITIES } from '../../consts';

type TabsItemProps = {
  city: Cities;
  isActive: boolean;
  handleTabCLick: (city: Cities) => void;
}

type TabsListProps = {
  currentCity: Cities;
  handleTabCLick: (city: Cities) => void;
}


function TabsItem({city, isActive, handleTabCLick}: TabsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <div
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        onClick={ ()=> handleTabCLick(city) }
      >
        <span>{city}</span>
      </div>
    </li>
  );
}

export default function TabsList({currentCity, handleTabCLick}: TabsListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city): JSX.Element => (
            <TabsItem
              key={ city }
              city={ city }
              isActive={ city === currentCity }
              handleTabCLick={ handleTabCLick }
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

import Planets from '../data/Planets';
import PlanetCard from './PanetCard';
import Title from './Title';

function SolarSystem() {
return (
  <div className='solar-system-container'>
    <Title title='Planetas'/>
    <div className='planet-card-list'>
      {Planets.map((planet) => (
        <PlanetCard
          key={ planet.name } 
          planetName={ planet.name }
          planetImage={ planet.image }
        />
      ))}
    </div>
  </div>
);
}

export default SolarSystem;
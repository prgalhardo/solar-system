import Planets from '../data/Planets';
import PlanetCard from './PanetCard';
import Title from './Title';

function SolarSystem() {
return (
  <div className='solar-system-container'>
    <Title headline='Planetas'/>
    <div className='planet-card-container'>
      {Planets.map((planet) => (
        <PlanetCard 
          planetName={ planet.name }
          planetImage={ planet.image }
        />
      ))}
    </div>
  </div>
);
}

export default SolarSystem;
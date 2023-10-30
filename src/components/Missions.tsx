import Title from './Title';
import MissionsData from '../data/MissionsData';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div className='missions-container'>
      <Title />
      <div className='mission-card-list'>
       { MissionsData.map((mission) => (
        <MissionCard 
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />
       ))}
      </div>
    </div>
  )
}

export default Missions;
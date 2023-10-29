type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
}

function MissionCard(props: MissionCardProps) {

  const { name, year, country, destination } = props;

  return (
    <div className='mission-card-container'>
      <p className='mission-card-name'>{ name }</p>
      <p className='mission-card-year'>{ year }</p>
      <p className='mission-card-country'>{ country }</p>
      <p className='mission-card-destination'>{ destination }</p>
    </div>
  )
}

export default MissionCard;
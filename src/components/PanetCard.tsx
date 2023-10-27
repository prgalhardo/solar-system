type PlanetCardProps = {
  PlanetName: string;
  PlanetImage: string;
}

function PlanetCard(props: PlanetCardProps) {

  const { PlanetName } = props;
  const { PlanetImage } = props;

  return (
    <div className='planet-card-container'>
      <h2 className='planet-name'>{ PlanetName }</h2>
      <img src={ PLanetImage } alt={ `Planeta ${PlanetImage}`}
    </div>
  )
}

export default PlanetCard;
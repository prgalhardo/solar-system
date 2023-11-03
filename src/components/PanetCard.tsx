import '../css/PlanetCard.css'

type PlanetCardProps = {
  planetName: string;
  planetImage: string;
}

function PlanetCard(props: PlanetCardProps) {

  const { planetName, planetImage } = props;

  return (
    <div className='planet-card'>
      <img src={ planetImage } alt={ `Planeta ${planetImage}`} className='planet-image' />
      <h4 className='planet-name'>{ planetName }</h4>
    </div>
  )
}

export default PlanetCard;
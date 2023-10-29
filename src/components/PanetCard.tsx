type PlanetCardProps = {
  planetName: string;
  planetImage: string;
}

function PlanetCard(props: PlanetCardProps) {

  const { planetName, planetImage } = props;

  return (
    <div className='planet-card-container'>
      <h3 className='planet-name'>{ planetName }</h3>
      <img src={ planetImage } alt={ `Planeta ${planetImage}`} />
    </div>
  )
}

export default PlanetCard;
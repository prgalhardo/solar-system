import '../css/Title.css'

type TitleProps = {
  title: string;
}

function Title(props: TitleProps) {

  const { title } = props;
  
return (
  <div className='title-container'>
    <h3>{ title }!</h3>
  </div>
)
}

export default Title;
type TitleProps = {
  title: string;
}

function Title(props: TitleProps) {

  const { title } = props;
  
return (
  <div className='title-container'>
    <h3 className='title-name'>{ title }!</h3>
  </div>
)
}

export default Title;
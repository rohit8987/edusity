import "../Title/Title.css"

const Title = ({title, subTitle}) => {
  return (
    <div>
      <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Title

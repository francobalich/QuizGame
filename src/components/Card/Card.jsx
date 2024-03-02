import './Card.css'

export const Card = ({title="Title",text="-",animation}) => {
  return (
    <div className={`card ${animation}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

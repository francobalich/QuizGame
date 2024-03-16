import { useState } from 'react'
import './Card.css'

export const Card = ({title="Title",text="-"}) => {
  const [animation, setAnimation] = useState('')
  const handlePrevius = () => {
    setAnimation('cardToLeft')
    setTimeout(() => {setAnimation('hidden') }, 1000)
  }
  const handleOmit = () => {
    setAnimation('cardToBottom')
    setTimeout(() => {setAnimation('hidden') }, 1000)
  }
  const handleNext = () => {
    setAnimation('cardToRight')
    setTimeout(() => {setAnimation('hidden') }, 1000)
  }
  return (
    <div className={`card ${animation}`}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className=''>
        <button className='btnStyle' onClick={handlePrevius}>Anterior</button>
        <button className='btnStyle' onClick={handleOmit}>Omitir</button>
        <button className='btnStyle' onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import './Card.css'
import svgSuccess from '../../assets/success.svg'
import svgQuestion from '../../assets/question.svg'
import svgError from '../../assets/error.svg'
import pngQuestion from '../../assets/pregunta2.png'

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
      <img className='card__mainImg' src={pngQuestion} alt='imagen con signo de pregunta' />
      <p>{text}</p>
      <div className='card__btnContainer'>
        <img onClick={handlePrevius} src={svgError} alt='botton con una cruz' />
        <img onClick={handleOmit} src={svgQuestion} alt='botton con una cruz' />
        <img onClick={handleNext} src={svgSuccess} alt='botton con una cruz' />
      </div>
    </div>
  )
}

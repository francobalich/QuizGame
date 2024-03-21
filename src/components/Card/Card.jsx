import { useEffect, useState } from 'react'
import './Card.css'
import svgSuccess from '../../assets/success.svg'
import svgQuestion from '../../assets/question.svg'
import svgError from '../../assets/error.svg'
import pngQuestion from '../../assets/pregunta2.png'

export const Card = ({title="Title",text="-", id,clb}) => {
  const [animation, setAnimation] = useState('')

  const removeQuestion=(newAnimation)=>{
    setAnimation(newAnimation)
    setTimeout(() => {
      setAnimation('hidden')
      clb(id)
    }, 1000)
  }

  const handlePrevius = () => {
    removeQuestion('cardToLeft')
  }
  const handleOmit = () => {
    removeQuestion('cardToBottom')
  }
  const handleNext = () => {
    removeQuestion('cardToRight')
  }
  useEffect(() => {
    return () => {
      <></>
    }
  }, [animation])

  return (
    <div className={`card ${animation}`}>
      <h3 className='title'>{title}</h3>
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

import { useEffect, useState } from 'react'
import './Card.css'
import svgLike from '../../assets/like.svg'
import svgDislike from '../../assets/dislike.svg'
import svgReturn from '../../assets/return.svg'
import pngQuestion from '../../assets/pregunta2.png'
import { useNavigate } from 'react-router-dom'

export const Card = ({ title = "Title", text = "-", id, clb }) => {
  const [animation, setAnimation] = useState('')
  const navigate = useNavigate()
  const removeQuestion = (newAnimation) => {
    setAnimation(newAnimation)
    setTimeout(() => {
      setAnimation('hidden')
      clb(id)
    }, 1000)
  }

  const handleBtnDislike = () => {
    removeQuestion('cardToLeft')
    localStorage.setItem(id, false)
  }

  const handleBtnLike = () => {
    removeQuestion('cardToRight')
    localStorage.setItem(id, true)
  }
  const handleBtnReturn = () => {
    navigate('/')
  }

  return (
    <div className={`card ${animation}`}>
      <h3 className='title'>{title}</h3>
      <img className='card__mainImg' src={pngQuestion} alt='imagen con signo de pregunta' />
      <p>{text}</p>
      <div className='card__btnContainer'>
        <img className='svgButton btnRadius dislike' onClick={handleBtnDislike} src={svgDislike} alt='botton de no me gusta' />
        <img className='svgButton' onClick={handleBtnReturn} src={svgReturn} alt='botton volver' />
        <img className='svgButton btnRadius like' onClick={handleBtnLike} src={svgLike} alt='botton me gusta' />
      </div>
    </div>
  )
}

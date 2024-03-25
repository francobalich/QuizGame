import { useEffect, useState } from 'react'
import './Card.css'
import svgLike from '../../assets/like.svg'
import svgDislike from '../../assets/dislike.svg'
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

  const handleBtnDislike = () => {
    removeQuestion('cardToLeft')
    localStorage.setItem(id,false)
  }

  const handleBtnLike = () => {
    removeQuestion('cardToRight')
    localStorage.setItem(id,true)
  }


  return (
    <div className={`card ${animation}`}>
      <h3 className='title'>{title}</h3>
      <img className='card__mainImg' src={pngQuestion} alt='imagen con signo de pregunta' />
      <p>{text}</p>
      <div className='card__btnContainer'>
        <img className='svgButton dislike' onClick={handleBtnDislike} src={svgDislike} alt='botton con una cruz' />
        <img className='svgButton like' onClick={handleBtnLike} src={svgLike} alt='botton con una cruz' />
      </div>
    </div>
  )
}

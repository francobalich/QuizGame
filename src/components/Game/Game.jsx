import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import './Game.css'
import questionData from '../../data/questions.json'

export const Game = () => {
  const [animation, setAnimation] = useState('')
  const [questionValue, setQuestionValue] = useState([{}])
  const handlePrevius = () => {
    setAnimation('cardToLeft')
    setTimeout(() => { }, 1000)
  }
  const handleOmit = () => {

  }
  const handleNext = () => {
    setAnimation('cardToRight')
  }
  useEffect(() => {
    setQuestionValue(questionData[0])
  }, [])
  useEffect(() => {
  }, [questionValue])
  return (
    <section className='gameContainer'>
      <Card animation={animation} title={questionValue.theme} text={questionValue.question} />
      <div>
        <button onClick={handlePrevius}>Anterior</button>
        <button onClick={handleOmit}>Omitir</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </section>
  )
}

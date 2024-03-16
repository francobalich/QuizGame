import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import './Game.css'
import questionData from '../../data/questions.json'

export const Game = () => {

  const [questions, setQuestions] = useState(<></>)

  const makeCards = () => {
    let questionList = []
    let i = 0
    questionData.forEach(question => {
      questionList.push(<Card key={i} title={question.theme} text={question.question} />)
      i++
    });
    return questionList
  }
  useEffect(() => {
    setQuestions(makeCards())
    console.log(questions.lenght);
  }, [])

  return (
    <section className='gameContainer'>
      {questions}
    </section>
  )
}

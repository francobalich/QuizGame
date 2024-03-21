import { useEffect, useState } from 'react'
import { Card } from '../../components/Card/Card'
import './Game.css'
import questionData from '../../data/questions.json'

export const Game = () => {

  const [questions, setQuestions] = useState(<></>)

  const removeQuestion = (id) => {
    let questionsAux = [];
    questionsAux = questions;
    console.log(questions);
    let newList=questionsAux.filter(x=>x.id!==id)
    console.log(newList);
  }
  const makeCards = () => {
    let questionList = []
    questionData.forEach(question => {
      questionList.push(<Card
        key={question.id}
        id={question.id}
        title={question.theme}
        text={question.question}
        clb={removeQuestion}
      />)
    });
    return questionList
  }

  useEffect(() => {
    setQuestions(makeCards())
  }, [])

  return (
    <section className='gameContainer'>
      {questions}
    </section>
  )
}

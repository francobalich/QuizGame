import { useEffect, useState } from "react";
import { Card } from "../Card/Card"
import questionData from '../../data/questions.json'

export const Cards = () => {
  const [questions, setQuestions] = useState(questionData)

  const removeQuestion = (id) => {
    let questionsAux = [];
    questionsAux = questions;
    let newList = questionsAux.filter(x => x.id !== id)
    console.log(newList);
    setQuestions(newList)
  }

  return (
    <>
      {
        questions.map(({ question, theme, id }) => {
          return (
            <Card
              key={id}
              id={id}
              title={theme}
              text={question}
              clb={removeQuestion}/>
          )
        })
      }
    </>
  )
}

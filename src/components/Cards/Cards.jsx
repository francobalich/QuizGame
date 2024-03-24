import { useEffect, useState } from "react";
import { Card } from "../Card/Card"
import questionData from '../../data/questions.json'

export const Cards = () => {
  //Ex: questionData.splice(1, questionData.length - 1 );

  const [questions, setQuestions] = useState(questionData)

  const removeQuestion = (id) => { //Todo Revisar
    setQuestions(value=>value.filter(x => x.id !== id))
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
              clb={removeQuestion} />
          )
        })
      }
    </>
  )
}

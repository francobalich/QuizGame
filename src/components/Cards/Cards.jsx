import { Card } from "../Card/Card"

export const Cards = ({ questionData }) => {
    console.log(questionData.length)
    return (
    <>
        {
          questionData.map(({ question, theme }, i) => {
            // No te olvides de crear un id por cada question ya que es mala practica usar index por su variabilidad
          return <Card key={i} title={theme} text={question} />
          })
        }
    </>
    )
}

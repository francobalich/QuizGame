import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  return (
    <section>
      <h1>Quiz Game</h1>
      <Link to='/game'>Jugar</Link>
    </section>
  )
}

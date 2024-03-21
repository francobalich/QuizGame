import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  return (
    <section className='home'>
      <h1 className='title home__mainTitle'>Quiz Game</h1>
      <Link className='btnStyle' to='/QuizGame/game'>Jugar</Link>
    </section>
  )
}

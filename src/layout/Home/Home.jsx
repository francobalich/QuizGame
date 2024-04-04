import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  return (
    <section className='home'>
      <h1 className='title home__mainTitle'>Quiz Game</h1>
      <Link className='btnStyle' to='/game'>Jugar</Link>
      <Link className='btnStyle' to='/info'>Créditos</Link>
    </section>
  )
}

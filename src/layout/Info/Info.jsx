import { Link } from 'react-router-dom'
import './Info.css'

export const Info = () => {
  return (
    <section className='infoSection'>
      <div className='infoSection__container'>
        <h1>Desarrollado por Franco Balich</h1>
        <p>En directo por Twitch: <a href='https://www.twitch.tv/francolabs'>FrancoLabs</a></p>
        <p><a href='https://github.com/francobalich/QuizGame'>Repositorio de GitHub</a></p>
        <p>©2024</p>
        <Link className='btnStyle' to='/'>Volver</Link>
      </div>

    </section>
  )
}

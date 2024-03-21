import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Game } from './layout/Game/Game'
import { Home } from './layout/Home/Home'

function App() {

  return (
    <Routes>
      <Route path='/QuizGame/' element={<Home />} />
      <Route path='/QuizGame/game' element={<Game />} />
      <Route path='/*' element={<Navigate to='/QuizGame/' />} />
      
    </Routes>
  )
}

export default App

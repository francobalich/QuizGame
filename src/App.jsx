import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Game } from './components/Game/Game'

function App() {

  return (
    <Routes>
      <Route path='/' element={<h1>Quiz Game</h1>} />
      <Route path='/game' element={<Game />} />
      <Route path='/*' element={<Navigate to='/' />} />
      
    </Routes>
  )
}

export default App

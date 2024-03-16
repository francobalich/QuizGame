import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Game } from './layout/Game/Game'
import { Home } from './layout/Home/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} />
      <Route path='/*' element={<Navigate to='/' />} />
      
    </Routes>
  )
}

export default App

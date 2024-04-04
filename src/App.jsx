import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Game } from './layout/Game/Game'
import { Home } from './layout/Home/Home'
import { Test } from './components/Test'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} />
      <Route path='/info' element={<Test />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App

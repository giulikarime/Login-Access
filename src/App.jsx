import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/Signup'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login></Login>}/>
      <Route path='/signup' element={<Signup></Signup>}/>
    </Routes>
  )
}

export default App

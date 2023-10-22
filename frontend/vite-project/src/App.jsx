
import SignUp from './pages/SignUp'
import './App.css'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route,Navigate } from "react-router"
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' index element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addvolunteer from './components/Addvolunteer'
import Viewvolunteer from './components/Viewvolunteer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigationbar from './components/Navigationbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
            


      <Route path='/' element={<Addvolunteer/>} />
      <Route path='/viewall' element={<Viewvolunteer/>} />

    </Routes>
    </BrowserRouter>
   
      
    </>
  )
}

export default App

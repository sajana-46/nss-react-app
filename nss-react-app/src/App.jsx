import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addvolunteer from './components/Addvolunteer'
import Viewvolunteer from './components/Viewvolunteer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Addvolunteer/>
    <Viewvolunteer/>
      
    </>
  )
}

export default App

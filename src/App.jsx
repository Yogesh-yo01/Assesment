import { useState } from 'react'
import './App.css'
//import Monthly from './assets/components/Annually'
import Annually from './assets/components/Annually'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Annually/>
    <img src="./public/bg-top.svg" alt="backgroundImg" id='imgt'/>
    <img src="./public/bg-bottom.svg" alt="backgroundImg" id='imgb'/>
    </>
  )
}

export default App

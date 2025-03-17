import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  const resetButton = () => {
    setCounter(0)
  }
  
  return (
    <>
      <h1>Counter Using React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button> 
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
      <br />
      <button
      onClick={resetButton}
      >Reset Button</button> 
      <p>footer: {counter}</p>
    </>
  )
}

export default App
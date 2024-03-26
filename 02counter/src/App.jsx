import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState - Hook to change the state in your React Application

  const [counter, setCounter] = useState(0);  // In this counter is "variable name"  & setCounter is a "method" which controls counter


  // let counter = 15

  let addValue = () => {
    // counter = ++counter;
    // console.log(counter);

    setCounter(counter + 1)
    console.log(counter);
  }

  const subValue = () => {
      // counter = ++counter;
      // console.log(counter);
      setCounter(counter - 1);
      console.log(counter);
  }

  return (
    <>
    <h1>Harsh and React</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button onClick={subValue}>Subtract Value {counter}</button>
    </>
  )
}

export default App

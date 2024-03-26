import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Harsh", 
    age: 20
  }

  let myArr = [
    1, 2, 3, 4, 5
  ]
  

  return (
    <>
    <h1 className='bg-pink-400 text-black p-4 rounded-xl mb-6' >Price</h1>
    <Card title="Russian" price = "6000" />
    <Card title="Indian" price = "4000" />
    <Card title = "Nepali" price = "2000" />


    </>
  )
}

export default App

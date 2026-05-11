import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('grey')

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center" style={{ backgroundColor: color }}>
      <div className='bg-white flex flex-wrap justify-center items-center gap-10 p-4'>
        <button className='bg-red-500 p-1 rounded' onClick={()=>{
          setColor('red')
        }}> Red </button>
        <button className='bg-blue-500 p-1 rounded' 
        onClick={()=>{
          setColor('blue')
        }}> Blue </button>
        <button className='bg-green-500 p-1 rounded' onClick={
          ()=>{
            setColor('green')
          }
        }> Green </button>
        <button className='bg-gray-500 p-1 rounded' onClick={
          ()=>{
            setColor('grey')
          }
        } > Grey </button>
      </div>
    </div>
  )
}

export default App

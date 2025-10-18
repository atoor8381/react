import { useState } from 'react'
import Hello from './Hello'
import React from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(20)  
  let increasenumber = ()=>{
    if(counter==20){return }
    setCounter(counter+1)
  }

  let decreasevalue=()=>{
    if(counter==0){return}
    setCounter(counter-1)
  }

  return (
    <>
    
    <h1>
      Counter App
    </h1>
    <p> 
      Value : {counter}
    </p>
    <button onClick={increasenumber}>
      increase value
    </button>
    <button onClick={decreasevalue}>
      decrease value
    </button>
    </>
  )
}

export default App

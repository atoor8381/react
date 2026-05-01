import { useState } from 'react'
import Hello from './Hello'
import React from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(20)  
  let increasenumber = ()=>{
    if(counter==30){return }
    setCounter(p=> p+1)
    setCounter(p=> p+1)
    setCounter(p=> p+1)
    setCounter(p=> p+1)
    // Here we should use the callback function of setCounter to get the latest value of counter, because setCounter is asynchronous and if we directly use counter+1, it will not give the correct value. By using the callback function, we can ensure that we are getting the latest value of counter and incrementing it correctly. the official name for this is functional update form of setState.
    console.log(counter)
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

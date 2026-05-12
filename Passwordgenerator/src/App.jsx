import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [defaultpassword, setdefaultpassword] = useState("")
  const passwordgenerator = useCallback(()=>{
    password = ""
    string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    number = "0123456789"
    char = "!@#$%^&*"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*string.length+1)
      password = string.charAt(char)
      
    }

    setdefaultpassword(password)

  }, [length, numAllowed, charallowed,setdefaultpassword])

  return (
    <>
    <div className='bg-gray-500 w-full text-orange-500 max-w-md mx-auto px-4 py-4 my-8 rounded-lg flex-column-wrap '>
      <h2 className='text-2xl text-center'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={defaultpassword}
        className='bg-white outline-none w-full py-2 px-3 rounded'
        placeholder='defaultpassword'
        readOnly />
        <button className='mx-1 rounded bg-black p-1'>
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        value={length}
        min={8}
        max={100}
        className='cursor-pointer'
        onChange={(e)=>{
          setlength(e.target.value)
        }}
         />
         <label>length:({length})</label>
      </div>
       <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setnumallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setcharallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App

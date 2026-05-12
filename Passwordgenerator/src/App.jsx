import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [defaultpassword, setdefaultpassword] = useState("")
  
  const passwordRef = useRef(null)
  
  useEffect(() => {
    let password = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) {
      string += "0123456789"
    }
    if (charallowed) {
      string += "!@#$%^&*"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length) // Fixed: removed +1
      password += string.charAt(char)
    }

    setdefaultpassword(password)
  }, [length, numAllowed, charallowed])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99999)
    window.navigator.clipboard.writeText(defaultpassword)
    
    alert("Password copied to clipboard!")
  }, [defaultpassword])

  return (
    <>
    <div className='bg-gray-500 w-full text-orange-500 max-w-md mx-auto px-4 py-4 my-8 rounded-lg flex-column-wrap '>
      <h2 className='text-2xl text-center'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        ref={passwordRef}
        value={defaultpassword}
        className='bg-white outline-none w-full py-2 px-3 rounded'
        placeholder='defaultpassword'
        readOnly />
        <button 
          onClick={copyToClipboard}
          className='mx-1 rounded bg-black p-1 hover:bg-gray-800 transition-colors'
        >
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
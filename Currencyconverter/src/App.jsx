import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import usecurrencyinfo from './hooks/usecurrencyinfo.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const currencyinfo = usecurrencyinfo('usd')

  return (
    <>
      <h1>Hello</h1>
      <p>
        {currencyinfo}
      </p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import usecurrencyinfo from './hooks/usecurrencyinfo.js'
import Inputbox from './components/Input.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [allcurrencies, allrates] = usecurrencyinfo('usd')
  const [amount, setamount] = useState(0)
  console.log(currencies)
  console.log(rates)
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import usecurrencyinfo from './hooks/usecurrencyinfo.js'
import Inputbox from './components/Inputbox.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [amount, setamount] = useState()
  const [convertedamount, setconvertedamount] = useState()
  const [to,setto] = useState('PKR')
  const [from, setfrom] = useState('USD')
  const [allcurrencies, allrates] = usecurrencyinfo(from)
  console.log(allrates)
  const swap = () => {
    setfrom(to)
    setto(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    console.log(from)
    console.log(to)
    setconvertedamount(amount * allrates[to])
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
        <div>
        <Inputbox
        label = "from"
        amount = {amount}
        currencyoptions = {allcurrencies}
        oncurrencychange = {(currency) => setfrom(currency)}
        onamountchange = {(amount) => setamount(amount)}
        selectcurrency={from}
        />
        </div>
        <div>
        <button onClick={swap}> SWAP </button>
        </div>
        <div>
          <Inputbox 
          label="to"
          amount={convertedamount}
          currencyoptions = {allcurrencies}
          oncurrencychange = {(currency) => setto(currency)}
          amountdisable = {true}
          selectcurrency={to}
          />
        </div>
        <button type="submit" >Convert</button>
      </form>
    </div>
  )
}

export default App
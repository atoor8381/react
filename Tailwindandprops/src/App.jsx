import { useState } from 'react'
import Card from './components/cards'
import './App.css'
import pen from "./assets/pencil.jpg"
import book from "./assets/books.jpg"
import laptop from "./assets/laptop.jpg"

function App() {
  const [count, setCount] = useState(0)

  let pendetails = {
    name: "pen",
    price: 20,
    pic: pen
  }

  let bookdetails = {
    name: "book",
    price: 50,
    pic: book
  }

  let laptopdetails = {
    name: "laptop",
    price: 2000,
    pic: laptop
  }


  return (
    <>
      <Card Details={pendetails} />
      <Card Details={bookdetails} />
      <Card Details={laptopdetails} />
    </>
  )
}

export default App

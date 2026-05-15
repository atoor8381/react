// This hook is used to get the currency info from the API. 
// The extension of this file is .js bcz it returns js stuff not some jsx 
import { useEffect,useState } from "react"


let currencyinfo = (currency) =>{
    let currencies =[];
    let rates =[];
    // We need to get the data with fetch but we will use the useeffect hook too because we will update the data everytime we have the change in the currency.
    let [data,setdata] = useState({}) //we have put the empty object inside the usestate so the app does not crash if we are not getting any data from the fetch 
    useEffect(()=>{
         fetch(`https://api.frankfurter.dev/v2/rates?base=${currency}`)
        .then((res) => res.json())
        .then((res)=>setdata(res))
    },[currency])
    for (let i = 0; i < data.length; i++) {
        currencies[i] = data[i].quote
        rates[i] = data[i].rate
    }
    return [currencies, rates];
}

export default currencyinfo
import { useId } from "react";
function Inputbox({
    amount,
    onamountchange,
    oncurrencychange,
    label, //this one takes either from or to.
    currencyoptions = [], //empty array in case there is no data coming from the API call 
    selectcurrency = "USD",
    currencydisable = false , // in the to section we will disable the currency and the amount change optional btw  
    amountdisable = false
}
) {
    let amountinputid = useId()
    return (
        <>
        <div>
            <div>
                <label htmlFor={amount} id={amountinputid}> {label} </label>
                <input type="number"
                id={amountinputid}
                placeholder="amount"
                disabled = {amountdisable}
                value={amount} // what actually is in the field after taking input from the user. 
                onChange={(e)=> onamountchange &&  onamountchange(Number(e.target.value)) } //&& is there as the onamount change is an optional props
                />
            </div>
        </div>
        <div>
            <p>Currency Type</p>
            <select
            value={selectcurrency}
            disabled = {currencydisable}
            onChange={(e)=> oncurrencychange && oncurrencychange(e.target.value) 
            }
            >
                {currencyoptions.map((currency)=>{
                return <option key={currency} value={currency}> 
                    {currency}
                </option>
                })}
            </select>
        </div>
        </>
     );
}

export default Inputbox;
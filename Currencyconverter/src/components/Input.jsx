function Inputbox(
    amount,
    onamountchange,
    oncurrencychange,
    label, //this one takes either from or to.
    currencyoptions = [], //empty array in case there is no data coming from the API call 
    selectcurrency = "usd", // this is the default currency that has been selected 
    currencydisable = false , // in the to section we will disable the currency and the amount change optional btw  
    amountdisable = true

) {
    return (
        <>
        <div>
            <div>
                <label htmlFor={amount}> {label} </label>
                <input type="number"
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
            onChange={(e)=> oncurrencychange(e.target.value)}
            >
                <option value={currency}></option>
            </select>
        </div>
        </>
     );
}

export default Inputbox;
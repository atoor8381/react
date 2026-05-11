

export default function card({Details}){
    console.log(Details)
    return(
        <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <h1>{Details.name}</h1>
            <p>Price: ${Details.price.toFixed(2)}</p>
            <img src={Details.pic} alt={Details.name} />
        </div>
        </>
    )
}
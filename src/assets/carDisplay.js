
function carDisplay({item, updateTotal}){
    return(
        <div>
            <h1>{item.name}</h1>
            <img src={item.image}/>
            <button onClick={() => updateTotal(item.name, item.price)}>add to cart</button>
        </div>
    )
}
export default carDisplay;
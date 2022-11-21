import React from 'react'

export default function Product(props) {
    const { product, onAdd } = props; 
  return (
    <div className='product'>
        <img className='small-align' src={product.image} alt={product.name}/>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>Number of seats: {product.seats}</div>
        <div>Car type: {product.type}</div>
        <div>
            <button onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  )
}

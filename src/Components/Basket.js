import React from 'react';

export default function Basket(props){
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice*0.14;
    const shippingPrice = itemsPrice > 10000 ? 0:50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
    <aside className='block col-thin'>
        <h2>Cart Items</h2>
        <p>Shipping free on orders above $10,000.00</p>
        <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
        </div>
        {cartItems.map((item) => (
        <div key={item.id} className="row">
            <div className='col-long'>{item.name}</div>
            <div className='col-long'>
                <button onClick={()=>onAdd(item)} className="add">+</button>
                <button onClick={()=>onRemove(item)} className="remove">-</button>
            </div>
            <div className='col-long text-right'>
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div classname= "row">
                <div className='col-long'>Items Price</div>
                <div className='col-thin text-right'>${itemsPrice.toLocaleString("en-US")}.00</div>
            </div>
            <div classname= "row">
                <div className='col-long'>Tax Price</div>
                <div className='col-thin text-right'>${taxPrice.toLocaleString("en-US")}.00</div>
            </div>
            <div classname= "row">
                <div className='col-long'>Shipping Price</div>
                <div className='col-thin text-right'>${shippingPrice.toLocaleString("en-US")}.00</div>
            </div>
            <div classname= "row">
                <div className='col-long'>Total Price</div>
                <div className='col-thin text-right'>
                    <strong>${totalPrice.toLocaleString("en-US")}.00</strong>
                    </div>
            </div>
            </>
        )}
    </aside>
    );
}
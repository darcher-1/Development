import React from 'react';

export default function Header(props){
    const { selectFilterType, onSort, selectSortType, selectFilterType2 } = props;
    const handleClick = (event) => {
        console.log(event, event.target.value);
        selectSortType(event.target.value);
        onSort(event.target.value);
    }
    const handleSort = (event) => {
        console.log(event, event.target.value);
        selectFilterType(event.target.value);
    }
    const handleSort2 = (event) => {
        console.log(event, event.target.value);
        selectFilterType2(event.target.value);
    }
    return(
    <header className="row block center">
        <div>
            <a href="#/" className='aclass'>
                <h1>Carol Baskin's Car's</h1>
            </a>
        </div>
        <div>
            <a href="#/cart" className='aclass'>Cart</a> <a href="#/signin" className='aclass'>SignIn</a>
        </div>
        <div className='row'>
            <h2>Filtering Options:</h2>
            <button onClick={handleClick} value="HL" className='headerButton'>High to Low</button> 
            <button onClick={handleClick} value="LH" className='headerButton'>Low to High</button>            
            <label for="car-filter">Filter vehicles:</label>
            <select  id="car-filter" onChange={handleSort}>
                <option  value="All" >All</option>
                <option  value="SUV" >SUV</option>
                <option  value="Sport" >Sport</option>
                <option  value="Pickup" >Pickup</option>
                <option  value="Family" >Family</option>
            </select>
            <label for="car-filter-2">Filter Occupants:</label>
            <select  id="car-filter-2" onChange={handleSort2}>
                <option  value="All2" >All</option>
                <option  value="2" >2</option>
                <option  value="3" >3</option>
                <option  value="4" >4</option>
            </select>
            
        </div>
    </header>
    );
}
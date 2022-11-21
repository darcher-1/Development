
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import carData from './assets/carData';
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Basket from "./Components/Basket.js"


function App() {
  const [products, setProducts ] = useState(carData.products);
  const  [cartItems, setCartItems] = useState([]);
  const [filterType, setType] = useState(["Sport", "SUV", "Family", "Pickup", "All"]);
  const [filterType2, setType2] = useState(["All2",'2', "3", "4"]);
  const [sortType, setSortType] = useState(["HL", "LH", "Original"]);
  const filterProducts = (item) => {
    if (filterType === "All" && filterType2 === "All2"){
      return products
    } else if (filterType === "All" && filterType2 !== "All2") {
      return (filterType2.includes(item.seats))
    } else if (filterType !== "All" && filterType2 === "All2") {
      return (filterType.includes(item.type))
    } else {
    return (filterType.includes(item.type) && filterType2.includes(item.seats))
    }
  }
  const onSort = (direction) => {
    if(direction ==="HL") {
    setProducts(products.sort((a,b) => b.price - a.price));
    } else if (direction === "LH"){
      setProducts(products.sort((a,b) => a.price - b.price)); 
    } else {
      setProducts(carData.products)
    }
  } 
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    //product already in cart so just increment count 
    if(exist){
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
      //product not in cart so need to add it 
    } else {
        setCartItems([...cartItems, {...product, qty:1}]);
    } 
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
    }
  }
  const selectFilterType = (eventKey) => {
    setType(eventKey);
  }
  const selectFilterType2 = (eventKey) => {
    setType2(eventKey);
  }
  const selectSortType = (eventKey) => {
    setSortType(eventKey);
  }
  
  return (
    <div className="App">
      <Header selectSortType={selectSortType} selectFilterType={selectFilterType} selectFilterType2={selectFilterType2} onSort={onSort}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products.filter(filterProducts)}></Main>
        <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;

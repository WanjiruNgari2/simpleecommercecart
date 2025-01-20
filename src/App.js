import React, {useState} from 'react';
import { ourProducts } from './components/productList/product';
import './App.css';



function App() {

const [cart, setCart] = useState([]);


//add item to cart
const addToCart = (product) => {
  setCart((prevCart) => {
     const oldProduct = prevCart.find(item => item.id === product.id);
     if (oldProduct) {
      return prevCart.map((item) => 
        item.id === product.id ? 
      {...item, quantity: item.quantity + 1} : item);
     }
     return [...prevCart, {...product, quantity: 1}];
  });
};


//totalprice
const totalprice = cart.reduce(
  (total, item) => total + item.price * item.quantity, 0
);

//deleteitem
const deleteItem = (productID) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
};


  return (
  <div className='appcontainer' >
                <div className='productcontainer'>
                <h1>New Clothes Available</h1>
                  {ourProducts.map((product) => (
                    <div key={product.id} className='item'>
                      <h2>{product.name}</h2>
                  <p> price: {product.price}</p>
                  <div>
                    <button onClick = {() => addToCart(product)}> ADD TO Cart</button>
                  </div>
                  </div>
              ))};
            </div>
              

            <div className=' cartcontainer'>
          <h2> YOUR CART</h2>
           {cart.length === 0 ? (
            <p>Your cart is empty</p> ) : 
            (cart.map((item) => (
              <div key={item.id} className='cart'>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <button onClick={() => addToCart(item)}> ADD TO CART</button>
                <button onClick={() =>  deleteItem(item.id)}> REMOVE</button>
                </div>
            )))
          }
    </div>




          {cart.length > 0 && (
            <div className='total'>
              <h3>TOTAL: {totalprice}</h3>
              </div>
          )}
</div>

    );
     
     
     }

export default App;

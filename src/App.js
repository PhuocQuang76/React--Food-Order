
import './App.css';
import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const[cartIsShow, setCartIsShow]  = useState(false);

  const showCartHandler = () => {
      setCartIsShow(true);
  }

  const hideCartHandler = () => {
      setCartIsShow(false);
  }

  return (
      // Thay the CartProvide because these function need the information
   <CartProvider>
       {cartIsShow && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}></Header>
       <main>
           <Meals/>
       </main>
       
   </CartProvider>
  );
}

export default App;

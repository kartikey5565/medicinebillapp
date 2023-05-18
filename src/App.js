import Navigation from "./Navigation";
import Input from "./Input";
import Medicines from "./Medicines";
import Cart from "./Cart";
import { useState } from "react";
function App() {
  const [cart,setCart] = useState(false)
  const toggleCart = ()=>{
    setCart(pre=>!pre)
  }
  
  return (
    <>
      <Navigation onCart={toggleCart}/>
      <Input/>
      <h2 className="m-3">All Medicines :</h2>
      <Medicines/>
      {cart&&<Cart toggle={toggleCart}/>}
    </>
  );
}

export default App;

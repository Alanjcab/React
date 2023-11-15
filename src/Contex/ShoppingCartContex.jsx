import {createContext, useEffect, useState,} from "react";

export const CartContext = createContext([])

export const ShoppingCartProvider = ({children})=>{

    const [cart, setCart] = useState([]);

    useEffect(() => {
      console.log("Productos en el carrito:", cart);
    }, [cart]);
  
  const addItem = (item, quantity) => {
    const existingProductIndex = cart.findIndex((prod) => prod.id === item.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const numericPrice = parseFloat(item.price);
      if (!isNaN(numericPrice)) {
        setCart([...cart, { ...item, quantity, price: numericPrice }]);
      } 
    }
  };
    const removeItem = (itemId) => {
      const updatedCart = cart.filter((prod) => prod.id !== itemId);
      setCart(updatedCart);
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => {
      if (!isNaN(item.price) && !isNaN(item.quantity)) {
        return acc + item.price * item.quantity;
      }
      return acc;
    }, 0);


    return(
        <CartContext.Provider value={{cart,setCart,addItem,removeItem,clearCart,totalQuantity,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
  }

  export default ShoppingCartProvider
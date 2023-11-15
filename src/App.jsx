import { BrowserRouter,Route, Routes } from "react-router-dom"
import ItemsListContainer from "./components/ItemsListContainer"
import NavBar from "./components/Navbar" 
import ItemDetailContainer from "./components/ItemDetailContainer"
import ShoppingCartProvider from "./Contex/ShoppingCartContex"
import CartWidget from "./components/CartWidget"
import Form from "./components/Form"
import Cart from "./components/Cart"



export const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar/>
        <Routes>
          <Route exact path ="/CartWidget" element={<CartWidget/>}/>
          <Route exact path ="/Cart" element={<Cart/>}/>
          <Route exact path = "/" element={<ItemsListContainer/>}/>
          <Route exact path = "/product/:id" element={<ItemDetailContainer/>}/>
          <Route exact path = "/categoria/:categoria" element={<ItemsListContainer/>}/>
          <Route exact path = "/Form" element ={<Form/>}/>
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}
export default App
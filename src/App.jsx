import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemsListContainer from "./components/ItemsListContainer"
import NavBar from "./components/Navbar" 
import ItemDetailContainer from "./components/ItemDetailContainer"



export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path = '/' element={<ItemsListContainer/>}/>
        <Route exact path = '/product/:id' element={<ItemDetailContainer/>}/>
        <Route exact path = '/categoria/:categoria' element={<ItemsListContainer/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
export default App
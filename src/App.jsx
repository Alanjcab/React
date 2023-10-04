import ItemsListContainer from "./components/ItemsListContainer"
import NavBar from "./components/Navbar"

export const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemsListContainer greeting={"Bienvenido a mi tienda"}/>
    </div>
  )
}
export default App
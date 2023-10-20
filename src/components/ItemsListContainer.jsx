import Itemlist from "./Itemlist"
import { useParams } from "react-router-dom"

const ItemsListContainer = () => {

  const {categoria} = useParams()

  const productos = [
    {id: "1", name: "producto 1", description: "descripcion del producto", price: 100, categoria:"a"},
    {id: "2", name: "producto 2", description: "descripcion del producto", price: 200, categoria:"a"},
    {id: "3", name: "producto 3", description: "descripcion del producto", price: 300, categoria:"a"},
    {id: "4", name: "producto 4", description: "descripcion del producto", price: 400, categoria:"b"},
    {id: "5", name: "producto 5", description: "descripcion del producto", price: 500, categoria:"b"},
    {id: "6", name: "producto 6", description: "descripcion del producto", price: 600, categoria:"b"},
    {id: "7", name: "producto 7", description: "descripcion del producto", price: 700, categoria:"c"},
    {id: "8", name: "producto 8", description: "descripcion del producto", price: 800, categoria:"c"},
    {id: "9", name: "producto 9", description: "descripcion del producto", price: 900, categoria:"c"},
  ]
const mostrarProductos = new Promise((resolve, reject) =>{
  if(productos.length > 0){
    setTimeout(()=>{
      resolve(productos)
    },3000)
  } else{
    reject("No se encontraron productos")
  }
})

mostrarProductos
.then((resultado)=>{
  console.log(resultado)
})
.catch((error)=>{
  console.log(error)
})

const filterCategoria = productos.filter((productos)=> productos.cateria == categoria)

  return (
    <>
    <Itemlist productos={filterCategoria} />
    </>

  )
}

export default ItemsListContainer
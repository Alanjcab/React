import { useEffect, useState} from "react"
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import {Center} from "@chakra-ui/react"
import Itemlist from "./Itemlist"
import { useParams } from "react-router-dom"

const ItemsListContainer = () => {
  
 const {categoria} = useParams()
 
 const [productos, setProductos] = useState([])
 

 console.log(productos)

 useEffect(()=>{
  const db = getFirestore()
  const itemsCollection = collection(db, "sillaPc")
  getDocs(itemsCollection).then((snapshot)=>{
    setProductos(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})))
  })
 },[])


const filterCategoria = productos.filter((productos)=> productos.categoria === categoria)

  return (
    <Center p ="1 rem">
    <>
    {categoria ? <Itemlist productos={filterCategoria}/> : <Itemlist productos ={productos}/>}
    </>
    </Center>
  )
}

export default ItemsListContainer
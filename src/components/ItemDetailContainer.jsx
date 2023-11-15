import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetails from "./ItemDetails"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  
  const {id} = useParams()

  const [producto, setProducto] = useState([])

  useEffect(()=>{
    const db = getFirestore()
    const oneItem = doc(db,"sillaPc",`${id}`)
    getDoc(oneItem).then((snapshot)=>{
      if(snapshot.exists()){
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
    })
  },[])
  console.log(producto)

  return (
    <>
        <ItemDetails producto={producto}/>
    </>
  )
}

export default ItemDetailContainer
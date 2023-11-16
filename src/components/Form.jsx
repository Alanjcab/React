import { useState } from "react"
import {Input,FormLabel,Button, Heading, Text, Flex} from "@chakra-ui/react"
import { collection, addDoc, getFirestore } from "firebase/firestore"

const Form = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState(null)

  const db =getFirestore()

  const handleSubmit =(e)=>{
    e.preventDefault()
    addDoc(ordersCollection, order).then(({id})=>
    setOrderId(id))
  }
  
  const order ={
    nombre,
    email
  }

  const ordersCollection=collection(db, "Miorden")

  return (
  <>
    <form onSubmit={handleSubmit}>
    <Flex alignItems='center' gap='3' direction="column" bg='black' color="white" p='15' borderRadius='lg'>
    <Heading as='h4' size='md'>Formulario de compra</Heading>
    <FormLabel>Escriba su nombre</FormLabel>
    <Input placeholder='Nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/>
    <FormLabel>Escriba su email</FormLabel>
    <Input placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
    <Button type="submit" colorScheme='blue'>Enviar</Button>
    <Text>Su numero de orden es el siguiente: {orderId}</Text>
    </Flex>
    </form>  
  </>
  )
}
export default Form
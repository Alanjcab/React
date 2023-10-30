import { useState } from "react"
import {Input,FormLabel,Button} from "@chakra-ui/react"

const Form = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(nombre)
    console.log(email)
  }
  
  return (
  <>
    <form onSubmit={handleSubmit}>
    <FormLabel>Escriba su nombre</FormLabel>
    <Input placeholder='Nombre' type="text" onChange={(e)=>setNombre(e.target.value)}/>
    <FormLabel>Escriba su email</FormLabel>
    <Input placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
    <Button type="submit" colorScheme='blue'>Enviar</Button>
    </form>
  </>
  )
}

export default Form
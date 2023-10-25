import { Badge, Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { AddIcon,MinusIcon } from '@chakra-ui/icons'
import { useState } from "react"

const ItemCount = () => {
    
    const [count, setCount] = useState(0)
    
    const mostras = ()=>{
        alert(`Vas a agregar ${count} productos al carrito`)
    }

    return (
    <Flex>
        <Box>
            <Button variant='outline' colorScheme='white' onClick={()=>setCount(count - 1)} m={1}>
          <MinusIcon/>
        </Button>
        <Badge ml='2x1' fontSize='1.5rem' colorScheme='white' variant='outline'>
            {count}
        </Badge>
        <Button variant='outline' colorScheme='white' onClick={()=> setCount(count + 1)} m={1}>
         <AddIcon/>
        </Button>
        </Box>
        <Spacer/>
        <Box m='1'>
            <Button onClick={mostras} color='white' colorScheme='blue'>
                Agregar al carrito
            </Button>
        </Box>
    </Flex>
  )
}

export default ItemCount
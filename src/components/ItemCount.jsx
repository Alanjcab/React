import { Badge, Box, Button, Flex, Spacer } from "@chakra-ui/react"
import { AddIcon,MinusIcon } from '@chakra-ui/icons'
import useContador from "./Contador";
import { useEffect } from "react";

const ItemCount = ({quantity, setQuantity }) => {
 
    const { count, increment, decrement } = useContador({
        initialValue: quantity,
        step: 1,
      })
    
      useEffect(() => {
        setQuantity(count)
      }, [count, setQuantity])


    return (
    <Flex>
        <Box>
            <Button variant='outline' colorScheme='white' onClick={decrement}>
          <MinusIcon/>
        </Button>
        <Badge ml='2x1' fontSize='1.5rem' colorScheme='white' variant='outline'>
            {count}
        </Badge>
        <Button variant='outline' colorScheme='white' onClick={increment}>
         <AddIcon/>
        </Button>
        </Box>
        <Spacer/>
    </Flex>
  )
}

export default ItemCount
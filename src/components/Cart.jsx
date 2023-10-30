import {Card,Stack,CardBody,Heading,CardFooter,Button,Text,Center, Box} from "@chakra-ui/react"

const Cart = ({name, description, price}) => {
  
  
  return (
    <>
    <Center p ="1 rem">
        <Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  bg='grey'
  color='white'
  p='4'
>
    <Stack>
     <CardBody>
        <Heading size='md'>{name}</Heading>
     </CardBody>
       <Text>{description}</Text>
       <Text>$ {price}</Text>
       <Box><Button variant='solid' colorScheme='blue'>Eliminar</Button></Box>
     <CardFooter>
       <Text>TOTAL : $</Text>
      </CardFooter>
    </Stack>
  </Card> 
  </Center>
    </>
  )
}

export default Cart
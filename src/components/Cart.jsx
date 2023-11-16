import Form from "./Form"
import { useContext } from "react";
import { CartContext } from "../Contex/ShoppingCartContex"
import { Flex, Center, Button, Heading,ListItem, List, Box,Spacer} from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice, removeItem } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
          <Center>
            <Box>
              <Flex alignItems='center' gap='3' direction="column">
          <Heading as='h4' size='md'>¡No existen productos!</Heading>
            <Button color="white" colorScheme="green">
              <Link to="/" className="Option">
                Home
              </Link>
            </Button>
            </Flex>
            </Box>
          </Center>
      </div>
    );
  }

    return (
  <div>
  <Flex alignItems='center' gap='3' direction="column">
  <Spacer/>
       
    <Box border='2px' borderColor='gray' borderRadius='lg' p="10" >
     <Flex alignItems='center' gap='3' direction="column">
      <Heading as='h4' size='md'>Detalles de su compra:</Heading>

      <List spacing={3}>
        {cart.map((item) => (
        <ListItem key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio por unidad: $
            {item.price}{" "}
        <Button onClick={() => removeItem(item.id)} colorScheme="red"> X </Button>
        </ListItem>))}
      
      <Heading as='h5' size='sm'>Total: ${totalPrice}</Heading>

      </List>

        <Button onClick={() => clearCart()} className="Button" colorScheme="blue">
          Eliminar compra
        </Button> 
        </Flex>
    </Box>
   
     <Spacer/>
    <Box>
      <Form/> 
    </Box>
    <Spacer/>
  </Flex>
         
    </div>
              
    
  )
}

export default Cart
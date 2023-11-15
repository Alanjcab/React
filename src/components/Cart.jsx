import Form from "./Form"
import { useContext } from "react";
import { CartContext } from "../Contex/ShoppingCartContex"
import { Flex, Center, Button,} from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice, removeItem } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <Flex>
          <Center>
            <h1>No hay productos agregados</h1>
            <Button as={Button} colorScheme="blue">
              <Link to="/" className="Option">
                Volver
              </Link>
            </Button>
          </Center>
        </Flex>
      </div>
    );
  }

    return (
        <div>
      <h2>Contenido del carrito:</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio por unidad: $
            {item.price}{" "}
            <Button onClick={() => removeItem(item.id)} colorScheme="red">
              Eliminar
            </Button>
          </li>
        ))}
        <h3>Total: ${totalPrice}</h3>
        <Button onClick={() => clearCart()} className="Button">
          Vaciar carrito
        </Button>
        <Button as={Link} to={"/Form"} variant="solid" colorScheme="blue">
          Finalizar compra
        </Button>

      </ul>
       <Form/>
    </div>
              
    
  )
}

export default Cart
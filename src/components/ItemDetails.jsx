import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Flex, Button, Heading, Text, Divider, Center } from "@chakra-ui/react";
import { CartContext } from "../Contex/ShoppingCartContex";
import ItemCount from "./ItemCount";

const ItemDetails = ({ producto }) => {

    const { id } = useParams();

    const { addItem } = useContext(CartContext);

    const [quantityAdded, setQuantityAdded] = useState(1)

    const handleOnAdd = () => {
        if (!isNaN(quantityAdded) && quantityAdded >= 0) {
            const item = {
                id, name: producto.name, price: producto.price
            }
            addItem(item, quantityAdded)
        } else {
            console.log("Cantidad inválida")
        }
    };
    return (
    <Center>
        <Card key={producto.id} direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline" color='black' p='4' border='2px' borderColor='gray' borderRadius='lg'>
            <Flex alignItems='center' gap='30' direction="column" p='3'>
                <Heading size="md">{producto.name}</Heading>
                <Divider />
                <Text py="3">{producto.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                        $ {producto.price}
                </Text>
                <Divider />
                <ItemCount quantity={quantityAdded} setQuantity={setQuantityAdded} />
                
                <Button variant="solid" colorScheme="blue" onClick={handleOnAdd}>
                        Agregar al Carrito
                </Button>
            </Flex>
        </Card>
    </Center> 
    )
}

export default ItemDetails
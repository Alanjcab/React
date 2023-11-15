import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Stack, CardFooter, Button, Heading, Text, Divider } from "@chakra-ui/react";
import { CartContext } from "../Contex/ShoppingCartContex";
import ItemCount from "./ItemCount";

const ItemDetails = ({ producto }) => {

    const { id } = useParams();

    const { addItem } = useContext(CartContext);

    const [quantityAdded, setQuantityAdded] = useState(1)

    const filteredProduct = Array.isArray(producto)
        ? producto.filter((p) => p.id === id)
        : [];

    const selectedProduct = filteredProduct[0];

    const handleOnAdd = () => {
        if (!isNaN(quantityAdded) && quantityAdded > 0) {
            const item = {
                id, name: producto.name, price: producto.price
            }
            addItem(item, quantityAdded)
        } else {
            console.log("Cantidad inválida")
        }
    };
    return (
        <Card key={producto.id} direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
            <Stack>
                <CardBody>
                    <Heading size="md">{producto.name}</Heading>
                    <Divider />
                    <Text py="2">{producto.description}</Text>
                    <Divider />
                    <Text color="blue.600" fontSize="2xl">
                        $ {producto.price}
                    </Text>
                </CardBody>
                <ItemCount quantity={quantityAdded} setQuantity={setQuantityAdded} />
                <CardFooter>
                    <Button variant="solid" colorScheme="blue" onClick={handleOnAdd}>
                        Agregar al Carrito
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default ItemDetails
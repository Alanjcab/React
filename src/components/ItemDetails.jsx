
import {Card,Stack,CardBody,Heading,CardFooter,Button,Text,Center} from "@chakra-ui/react"
import { useParams } from "react-router-dom"

const ItemDetails = ({ productos }) => {

    const {id} = useParams()

    const filterProduct = productos.filter((productos)=> productos.id == id)
    console.log(filterProduct)
    return(
        <>
        {
            filterProduct.map((p)=>{
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
                      <Heading size='md'>{p.name}</Heading>
                    </CardBody>
                    <Text>{p.description}</Text>
                    <Text>$ {p.price}</Text>
                    <CardFooter>
                      <Button variant='solid' colorScheme='blue'>
                        Contador
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
                </Center>
                    </>
                  )
            })
        }
        </>
    )
}

export default ItemDetails
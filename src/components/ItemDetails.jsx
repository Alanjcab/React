
import {Card,Stack,CardBody,Heading,CardFooter,Text,Center, ButtonGroup} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount"

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
                      <ButtonGroup spacing='2'>
                          <ItemCount/>
                      </ButtonGroup>
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
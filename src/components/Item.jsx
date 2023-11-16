import {Card,Heading,Button,Text, Flex} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = ({name, id, categoria}) => {

  return (
    <>
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' color='black' p='4' border='1px' borderColor='gray' borderRadius='lg' m='1'>
    <Flex alignItems='center' gap='30' direction="column" p='3'>
    <Heading size='md'>{name}</Heading>
    <Text>{categoria}</Text>
    <Button colorScheme='blue'>
        <Link to={`/product/${id}`}>
           Ver detalles
        </Link>
    </Button>
    </Flex>
    </Card>
    </>
  )
}

export default Item
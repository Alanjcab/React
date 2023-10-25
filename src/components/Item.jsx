import {Card,Stack,CardBody,Heading,CardFooter,Button,Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = ({name, id, categoria}) => {

  return (
    <>
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
      <Text>{categoria}</Text>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        <Link to={`/product/${id}`}>
           Ver detalles
        </Link>
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </>
  )
}

export default Item
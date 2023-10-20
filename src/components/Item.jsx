import {Card,Stack,CardBody,Heading,CardFooter,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = ({name, id,}) => {

  return (
    <>
    <Card 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Stack>
    <CardBody>
      <Heading size='md'>{name}</Heading>
    </CardBody>

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
import CartWidget from "./CartWidget"
import {Menu, MenuButton, MenuList, MenuItem,Flex, Box,Spacer} from '@chakra-ui/react'
import { Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div><Flex bg='black'>
    <Box p='5' color='white' fontSize={25}>
          <Link to={"/"}>
         <h1>TIENDA</h1>
         </Link>
    </Box>
    <Spacer />
    <Box p='5' color='white' fontSize={20}>
    <Menu>
        <MenuButton>
              CATEGORIAS
        </MenuButton>
            <MenuList bg='black'>
                <Link to={`/categoria/${"a"}`}>
                  <MenuItem bg='black'>Categoria A </MenuItem>
                </Link>
                <Link to={`/categoria/${"b"}`}>
                  <MenuItem bg='black'>Categoria B</MenuItem>
                </Link>
                <Link to={`/categoria/${"c"}`}>
                  <MenuItem bg='black'>Categoria C</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </Box>
    <Spacer />
    <Box p='5' color='white'>
        <CartWidget/>
    </Box>
  </Flex>
        

    </div>
  )
}

export default Navbar
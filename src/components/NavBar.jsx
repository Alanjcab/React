import CartWidget from "./CartWidget"
import {Menu, MenuButton, MenuList, MenuItem,Flex, Box,Spacer} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div><Flex bg='black'>
    <Box p='5' color='white' fontSize={25}>
         <h1>TIENDA</h1>
    </Box>
    <Spacer />
    <Box p='5' color='white' fontSize={20}>
    <Menu>
        <MenuButton>
            CATEGORIAS
        </MenuButton>
            <MenuList bg='black'>
                <MenuItem bg='black'>Categoria 1 </MenuItem>
                <MenuItem bg='black'>Categoria 2</MenuItem>
                <MenuItem bg='black'>Categoria 3</MenuItem>
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
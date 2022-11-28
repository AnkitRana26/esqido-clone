import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import AddressForm from '../../Components/Address/AddressForm'
import MiniCart from '../../Components/Address/MiniCart'

const Address = () => {
  return (
        <Box overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns="60% 40%" >
            
            <AddressForm/>
            <MiniCart/>
        </Box>



  )
}

export default Address
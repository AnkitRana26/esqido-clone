import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import  "./EmptyCart.css"
const EmptyCart = () => {
  return (
    <div className='emptyCart'>
        <Text textAlign="center"  marginBottom="0" backgroundColor="#1b2120" color="white" p="1%" fontSize="xx-large" fontWeight="bold" >Your Cart</Text>
        <Box  display="grid" alignItems="center" fontSize="large" color="#58595B" fontWeight="semibold" justifyContent="center" h="400px" border="2px solid rgba(0,0,0,.15)">
                    
                    <Image width="100%" src='https://sarivillafashion.com/img/images/listing-5/empty-cart.gif' />
                    <Text fontSize="3xl" textAlign="center" fontWeight="bold">
                        Your Cart is Empty
                    </Text>
        </Box>
    </div>
  )
}

export default EmptyCart
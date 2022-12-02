import { Box, Image, Text } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";
import React from 'react'
import  "./EmptyCart.css"
const EmptyCart = (props) => {
  return (
    <Box position={props.position?props.position:"block"}  className='emptyCart'>
        <Text  display="flex" alignItems="center" justifyContent="center" gap="1%" marginBottom="0" backgroundColor="#1b2120" color="white" p="1%" fontSize="2vw" fontWeight="bold" >Your Cart <FaShoppingCart/> </Text>
        <Box  display="grid" alignItems="center" fontSize="large" color="#58595B" fontWeight="semibold" justifyContent="center" h="400px" border="2px solid rgba(0,0,0,.15)">

                    <Image width="100%" src='https://sarivillafashion.com/img/images/listing-5/empty-cart.gif' />
                    <Text fontSize="1.5vw" textAlign="center" fontWeight="bold">
                        Your Cart is Empty
                    </Text>
        </Box>
    </Box>
  )
}

export default EmptyCart
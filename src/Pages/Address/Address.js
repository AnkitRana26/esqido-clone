import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AddressForm from '../../Components/Address/AddressForm'
import MiniCart from '../../Components/MiniCart/MiniCart'
import Cart from '../Cart/Cart'
import "./Address.css"

const Address = () => {

    let [isTablet] = useMediaQuery(['(max-width:1500px)'])

    useEffect(()=>{
        console.log(isTablet)
    },[isTablet])


    

  return(
        <Box border="1px solid red" backgroundColor="rgb(255,255,255)"  overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"60% 40%"} >
            
            <AddressForm/>
            <Box display={isTablet?"none":"block"}   >
                <MiniCart />
            </Box>
            
        </Box>



  )
}

export default Address
import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AddressForm from '../../Components/Address/AddressForm'
import MiniCart from '../../Components/MiniCart/MiniCart'
import Cart from '../Cart/Cart'
import "./Address.css"

const Address = () => {

    let [isTablet] = useMediaQuery('(max-width:900px)')

    useEffect(()=>{
        console.log(isTablet)
    },[isTablet])


    

  return(
        <Box  backgroundColor="rgb(255,255,255)"  overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"65% 35%"} >
            
            <AddressForm/>
            <Box backgroundColor="rgba(251,250,251,255)" display={isTablet?"none":"block"}   >
                <MiniCart position={"fixed"} />
            </Box>
            
        </Box>



  )
}

export default Address
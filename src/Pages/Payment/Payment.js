import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'
import MiniCart from '../../Components/MiniCart/MiniCart'
import PaymentComp from '../../Components/Payment/Payment'
import "./Payment.css"


const Payment = () => {
    let [isTablet] = useMediaQuery('(max-width:900px)')
  return (
    <Box color="#333333"  backgroundColor="rgb(255,255,255)"  overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"65% 35%"} >
        <PaymentComp/>
        <Box backgroundColor="rgba(251,250,251,255)" display={isTablet?"none":"block"}   >
                <MiniCart position={"fixed"} />
        </Box>
    </Box>
  )
}

export default Payment
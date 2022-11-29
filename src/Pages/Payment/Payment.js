import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'
import PaymentComp from '../../Components/Payment/Payment'

const Payment = () => {
    let [isTablet] = useMediaQuery('(max-width:900px)')
  return (
    <Box  backgroundColor="rgb(255,255,255)"  overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"65% 35%"} >
        <PaymentComp/>
    </Box>
  )
}

export default Payment
import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React, { useEffect, useState } from 'react'
import EmptyCart from '../../Components/Cart/EmptyCart'
import MiniCart from '../../Components/MiniCart/MiniCart'
import PaymentComp from '../../Components/Payment/Payment'
import "./Payment.css"


const Payment = () => {
    let [isTablet] = useMediaQuery('(max-width:900px)')
    const [cart,setData] = useState([]);

    useEffect(()=>{
      getData();
  },[])
    

    const getData =async()=>{
        let res = await fetch('https://esqido-data.onrender.com/cart');
        let data = await res.json();
        console.log(data);
        setData(data);
    }
  return (
    <Box color="#333333"  backgroundColor="rgb(255,255,255)"  overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"65% 35%"} >
        <PaymentComp/>
        <Box backgroundColor="rgba(251,250,251,255)" display={isTablet?"none":"block"}   >
                {cart.length>0?<MiniCart getData={getData} cartData={cart} position={"fixed"}/>:<EmptyCart position={'fixed'}/>}
        </Box>
    </Box>
  )
}

export default Payment
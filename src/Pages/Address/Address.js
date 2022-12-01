import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AddressForm from '../../Components/Address/AddressForm'
import EmptyCart from '../../Components/Cart/EmptyCart'
import MiniCart from '../../Components/MiniCart/MiniCart'
import Cart from '../Cart/Cart'
import "./Address.css"

const Address = () => {

    let [isTablet] = useMediaQuery('(max-width:900px)')
    const [cart,setData] = useState([]);

    

    const getData =async()=>{
        let res = await fetch('https://esqido-data.onrender.com/cart');
        let data = await res.json();
        console.log(data);
        setData(data);
    }

    useEffect(()=>{
        console.log(isTablet)
        getData()
    },[isTablet])


    

  return(
        <Box  backgroundColor="rgb(255,255,255)"  overflowX="hidden" w="100%" height="fit-content" m="auto" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"65% 35%"} >
            
            <AddressForm/>
            <Box backgroundColor="rgba(251,250,251,255)" display={isTablet?"none":"block"}   >
            {cart.length>0?<MiniCart getData={getData} cartData={cart} position={"fixed"}/>:<EmptyCart/>}
            </Box>
            
        </Box>



  )
}

export default Address
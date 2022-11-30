import { Box, Button, Center, Container, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { FormControl,InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import { GiCancel } from "react-icons/gi";
import { BsFillCartFill,BsCurrencyDollar,BsFillCartCheckFill,BsFillPatchCheckFill } from "react-icons/bs";
import { AiOutlineShoppingCart,AiOutlineDollarCircle,AiFillDelete } from "react-icons/ai";

import shopPay from "./shopPay.png"
import payPal from "./payPal.png"
import gPay from "./gPay.jpg"




const cartData=[
  {
      id:1,
      img:`https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-b_999x999.gif?v=1628635003`,
      name:`Companion Makeup Bag`,
      price:28,
      qty:1
  },
  {
      id:2,
      img:`https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-white-1_1101x1101.jpg?v=1641598386`,
      name:`Reusable Makeup Rounds (5 rounds)`,
      price:14.98,
      qty:1
  },
  {
    id:3,
    img:`https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-b_999x999.gif?v=1628635003`,
    name:`Companion Makeup Bag`,
    price:28,
    qty:1
},
{
    id:4,
    img:`https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-white-1_1101x1101.jpg?v=1641598386`,
    name:`Reusable Makeup Rounds (5 rounds)`,
    price:14.98,
    qty:1
}
]


const CartItem = () => {

  // const [value,setValue] = useState('');
  const [cart,setCart] = useState(cartData);
  const [isTablet] = useMediaQuery("(max-width: 900px)") 
  const [isLoading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])


  const handleChange =(id,value)=>{
      let newCart = [];

      for(let i=0;i<cart.length;i++){

        if(cart[i].id==id){
          cart[i].qty=value;
          
        }
        newCart.push(cart[i]);

      }
      setCart(prev=>newCart);
      


  }

  const removeCart=(id)=>{

    let newCart = [];

      for(let i=0;i<cart.length;i++){

        if(cart[i].id!=id){
          newCart.push(cart[i]);
        }

      }
    setCart(prev=>newCart);


  }

  const totalPrice =()=>{

    return cart.reduce((acc,ele)=>{
        return acc+(ele.qty*ele.price)
    },0).toFixed(0)

  }



  return (
    <div className='emptyCart' >
      
      <Container p="1% 0%" borderBottom="1px solid rgba(0,0,0,.15)" borderTop="1px solid rgba(0,0,0,.15)" mb="1%" display="grid" gridTemplateColumns="70% 30%" alignItems="center"  justifyContent="space-between" >
        

          <Box display="flex" alignItems="center" backgroundColor="transparent" textAlign="left"    gap="2%" marginBottom="1%"  p="0% 5%" fontSize={isTablet?"4vw":"2.5vw"} fontWeight="600" w="60%"  >Your Cart <BsFillCartCheckFill/> </Box>
          <Box display="grid"  justifyContent="space-between" gridTemplateColumns={isTablet?"40% 60%":"50% 50%"} alignItems="center">
            <Text textAlign="center" fontSize={isTablet?"2.5vw":"1.7vw"}>${totalPrice()}</Text>
            <Button float="right"  border="none" transition="all 0.2s linear;"  _hover={{backgroundColor:"grey"}} bg="#1b2120" color="white" display="flex" gap="2%" w="100%"  height={isTablet?"40px":"50px"}  p="0" fontWeight="medium" fontSize={isTablet?"2.5vw":"1.7vw"}>  <Text display="flex" alignItems="center" >Checkout</Text></Button>
          </Box>
        
      </Container>
        <Box p="2% 2%" display="grid" alignItems="center" fontSize="large" color="#58595B" fontWeight="semibold" border="1px solid rgba(0,0,0,.15)"   >
        {
          cart.map(ele=>{
            return isLoading?<div style={{marginBottom:"1%",padding:"1%",display:"flex",justifyContent:"space-between",alignItems:"center" }} >
              
              <Skeleton variant="rectangular" width={"120px"} height={"120px"}/>
              <Skeleton variant="rectangular" width={"300px"} height={"40px"}/>
              <div style={{display:"flex",gap:"10px",justifyContent:"space-between",alignItems:"center" }} >
              <Skeleton variant="rectangular" width={"80px"} height={"50px"}/>
              <Skeleton variant="text" width={"80px"} height={"50px"}/>

              </div>

            </div> :<Box key={ele.id} p="1%" m="1%"  display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"25% 75%"}   gap="1%" borderBottom="1px solid rgba(0,0,0,.15)" >
                    <Image h="120px" w="120px" margin={isTablet?"auto":""} src={ele.img} />
                    <Box p="1%" w="100%" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"65% 35%"}  alignItems="center"  justifyContent="space-between" >
                          <Box h="fit-content" textAlign={isTablet?"center":"left"} >
                              <Text p="0" m="0" fontWeight="600" color="black">{ele.name}</Text>
                      
                              <Text p="0" margin="0" fontWeight="600" color="#ae867a">Price:- ${ele.price}/Unit</Text>
                          </Box>
                          <Box display="flex" alignItems="center"  justifyContent="space-between"  >
                                <Box>
                                    <FormControl fullWidth  >
                                            <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                                            <Select 
                                                sx={{width:"80px"}}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={ele.qty}
                                                label="Qty"
                                                
                                                onChange={(e)=>{handleChange(ele.id,e.target.value)}}
                                            >
                                              
                                              <MenuItem value={1}>1</MenuItem>
                                              <MenuItem value={2}>2</MenuItem>
                                              <MenuItem value={3}>3</MenuItem>
                                              <MenuItem value={4}>4</MenuItem>
                                              <MenuItem value={5}>5</MenuItem>
                                              <MenuItem value={6}>6</MenuItem>

                                            </Select>
                                    </FormControl>
                                </Box>
                                <Box fontSize="1.5vw"  w={isTablet?"20%":"50%"}  display="flex" alignItems="center" justifyContent="space-around">
                                  <Text>${ele.price*ele.qty}</Text>
                                  <AiFillDelete color="#ae867a" onClick={()=>removeCart(ele.id)}/>

                                </Box>
                          </Box>
                    </Box>
            </Box>
        })
        }
                    
        </Box>
        <Box fontSize={isTablet?"3vw":"1.5vw"} fontWeight="600" backgroundColor="#1b2120" color="white" display="flex" justifyContent="space-between" p="0% 2%" border="1px solid rgba(0,0,0,.15)">
          <Text>Grand Total</Text>
          <Text>${totalPrice()}</Text>
        </Box>
        <Text mt="8%" fontSize={isTablet?"2.5vw":"1.3vw"}>*Shipping & taxes calculated at checkout</Text>
        <Button transition="all 0.2s linear;"  _hover={{backgroundColor:"grey"}} bg="#1b2120" color="white" display="flex" gap="1%"  height={isTablet?"50px":"70px"} border="none" w="100%" p="0" fontWeight="bold" fontSize={isTablet?"3vw":"1.7vw"}> <BsFillPatchCheckFill h="fit-content" /> <Text h="fit-content" >Checkout</Text></Button>
        <Box  display="flex" justifyContent="center" gap="1%" p="3% 0%">
          <Button border="none" bg="transparent" borderRadius="8px" > <Image borderRadius="8px" width="120px" height="55px" src={shopPay}/> </Button>
          <Button border="none" bg="transparent" borderRadius="8px" > <Image borderRadius="8px" width="120px" height="55px" src={payPal}/> </Button>
          <Button border="none" bg="transparent" borderRadius="8px" > <Image borderRadius="8px" width="120px" height="55px" src={gPay}/> </Button>
        </Box>
    </div>
  )
}

export default CartItem
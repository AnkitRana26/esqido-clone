import { Box, Button, Container, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react'
import { FormControl,InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { GiCancel } from "react-icons/gi";
import { BsFillCartFill,BsCurrencyDollar,BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineShoppingCart,AiOutlineDollarCircle,AiFillDelete } from "react-icons/ai";

import shopPay from "../Cart/shopPay.png"
import payPal from "../Cart/payPal.png"
import gPay from "../Cart/gPay.jpg"
import { reference } from '@popperjs/core';
import "./MiniCart.css"






const MiniCart = ({cartData,getData,position}) => {

  const [cart,setCart] = useState(cartData);
  const [isTablet] = useMediaQuery("(max-width: 900px)") 
  const [discount,setDiscount] = useState(0);
  let refrence = useRef();
  
  const handleChange =async(ele,value)=>{
    let newObj = {...ele};
    delete newObj.id;
    newObj.qty=value;
    let res = await fetch(`https://esqido-data.onrender.com/cart/${ele.id}`,{
      method:"PATCH",
      body:JSON.stringify(newObj),
      headers:{
        "Content-Type":"application/json"
      }
    });
    let data = await res.json();
    getData();
  }

  useEffect(()=>{
    if(localStorage.getItem("coupon")){
      setDiscount(totalPrice()*10/100)

    }
  },[])

  const removeCart=async(id)=>{
    let res = await fetch(`https://esqido-data.onrender.com/cart/${id}`,{
      method:"DELETE"
      }
    );
    getData();


  }

  const totalPrice =()=>{

    return cartData.reduce((acc,ele)=>{
        return acc+(ele.qty*ele.price)
    },0).toFixed(0)

  }


  return (
    <Box position={position} w="33%" top="0%" p="15px"  backgroundColor="" margin="auto"  >
    <Container p="1% 0%"  mb="1%" display="grid"  alignItems="center"  justifyContent="center" bg="#1b2120"  >
        

        <Box  backgroundColor="transparent" textAlign="left" color="white"    gap="2%" marginBottom="1%"  p="0% 5%" fontSize={isTablet?"4vw":"1.5rem"} fontWeight="600" w="100%"  >Mini Cart <BsFillCartCheckFill/> </Box>
       
      
    </Container>
      <Box className='cartDiv' height="350px" overflowY="auto" overflowX="hidden" display="grid" alignItems="center" fontSize="large" color="#58595B" fontWeight="semibold" border="1px solid rgba(0,0,0,.15)"   >
      {
        cartData.map(ele=>{
          return <Box  key={ele.id} p="2%"   display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"25% 75%"}   gap="1%" borderBottom="1px solid rgba(0,0,0,.15)" >
                  <Image h="100px" w="100px" margin={isTablet?"auto":""} src={ele.img1} />
                  <Box p="1%" w="100%" display="grid" gridTemplateColumns={isTablet?"repeat(1,1fr)":"62% 38%"}  alignItems="center"  justifyContent="space-between" >
                        <Box h="fit-content" textAlign={isTablet?"center":"left"} >
                            <Text p="0" m="0" fontSize="1rem" fontWeight="600" color="black" noOfLines={1}>{ele.title}</Text>
                    
                            <Text p="0" margin="0" fontWeight="600" fontSize="0.7rem" color="#422828">Price:- ${ele.price}/Unit</Text>
                        </Box>
                        <Box display="flex" alignItems="center"  justifyContent="space-between"  >
                              <Box>
                                  <FormControl fullWidth  >
                                          <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                                          <Select 
                                              sx={{width:"55px",height:"30px",fontSize:"0.8rem"}}
                                              labelId="demo-simple-select-label"
                                              id="demo-simple-select"
                                              value={ele.qty}
                                              label="Qty"
                                              
                                              onChange={(e)=>{handleChange(ele,e.target.value)}}
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
                              <Box fontSize="0.9rem"  w={isTablet?"20%":"50%"}  display="flex" alignItems="center" justifyContent="space-around">
                                <Text>${(ele.price*ele.qty).toFixed(0)}</Text>
                                <AiFillDelete color=" rgb(147 43 11)" onClick={()=>removeCart(ele.id)}/>
                              </Box>
                        </Box>
                  </Box>
          </Box>
      })
      }
                  
      </Box>

        <Box>
        <FormControl fullWidth sx={{ display: "grid",gridTemplateColumns:"69% 30%", gap: "3px",margin:"4% 0%" }}>
        <input style={{padding:"0% 4%",outline:"none"}} ref={refrence} type="text" placeholder="Enter Coupon" />
        <Button onClick={()=>{
          console.log("Hello");
          if(refrence.current.value==="Masai10"){
            localStorage.setItem("coupon",true);
            setDiscount(totalPrice()*10/100);
          }
          // reference.current.value="";
        }}  border="none" transition="all 0.2s linear;" borderRadius="5px"  _hover={{backgroundColor:"grey"}} bg="#1b2120" color="white" display="flex" gap="2%" w="100%" h="40px"   p="0" fontWeight="medium" fontSize={isTablet?"2.5vw":"1rem"}>  <Text display="flex" alignItems="center" >Apply</Text></Button>

        </FormControl>
        </Box>
        <Box   fontSize="0.8rem" fontWeight="600"  display="grid" gridTemplateColumns="repeat(2,1fr)" justifyContent="space-between" p="0% 2%" border="1px solid rgba(0,0,0,.15)">
          <Text m="5" >Sub Total</Text>
          <Text m="5" textAlign="right" >${totalPrice()}</Text>
          <Text m="5">Delivery Charges</Text>
          <Text m="5" textAlign="right" >Free</Text>
          <Text m="5">Coupoun Amount</Text>
          <Text m="5" textAlign="right" >${discount}</Text>
        </Box>
        <Box fontSize="1rem" fontWeight="600" bg="#1b2120"  color="white " display="grid" gridTemplateColumns="repeat(2,1fr)" justifyContent="space-between" p="4% 2%" border="1px solid rgba(0,0,0,.15)">
          <Text p="0" m="0">Grand Total</Text>
          <Text p="0" m="0" textAlign="right" >${totalPrice()-discount}</Text>
        </Box>
      
      

    </Box>
  )
}

export default MiniCart
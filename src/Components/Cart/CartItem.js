import { Box, Container, Image, Text } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { FormControl,InputLabel, MenuItem, Select } from '@mui/material';


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
  }
]


const CartItem = () => {

  // const [value,setValue] = useState('');
  const [cart,setCart] = useState(cartData);

  useEffect(()=>{

  },[cart])


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




  return (
    <div className='emptyCart'>
        <Text  display="flex" alignItems="center" justifyContent="center" gap="1%" marginBottom="0" backgroundColor="#1b2120" color="white" p="1%" fontSize="2vw" fontWeight="bold" >Your Cart <FaShoppingCart/> </Text>
        <Box p="0% 1%" display="grid" alignItems="center" fontSize="large" color="#58595B" fontWeight="semibold"   >
        {
          cart.map(ele=>{
            return <Box key={ele.id} p="1%" m="1%"  display="flex" gap="1%" >
                    <Image h="150px" w="150px" src={ele.img} />
                    <Box p="1%" w="100%" display="flex" alignItems="center"  justifyContent="space-between" >
                          <Box h="fit-content" >
                              <Text p="0" m="0" fontWeight="semibold" color="black">{ele.name}</Text>
                      
                              <Text p="0" margin="0" color="#f43b62">Price:- ${ele.price}</Text>
                          </Box>
                          <Box>
                                <Box>
                                <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            sx={{width:"100px"}}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={ele.qty}
                                            label="Qty"
                                            onChange={(e)=>{handleChange(ele.id,e.target.value)}}
                                          >
                                          
                                          <MenuItem value={1}>1</MenuItem>
                                          <MenuItem value={2}>2</MenuItem>
                                          <MenuItem value={3}>3</MenuItem>
                                          <MenuItem value={3}>4</MenuItem>
                                          <MenuItem value={3}>5</MenuItem>
                                          <MenuItem value={3}>6</MenuItem>
                                        </Select>
                                </FormControl>
                                </Box>
                          </Box>
                    </Box>
            </Box>
        })
        }
                    
        </Box>
    </div>
  )
}

export default CartItem
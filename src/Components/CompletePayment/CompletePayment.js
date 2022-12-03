import {  Box, Button, HStack, Image, PinInput, PinInputField, Text } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Badge } from '@mui/material'
import payhere from "./payhere.png"
import "./CompletePayment.css"
const CompletePayment = () => {
    const changeHandler=(e)=>{
        console.log(e)
    }
  return (
    <>
    <Box  gap={"1%"} w={"30%"} display={"flex"} justifyContent={"center"} alignItems="center"  m="-3% auto 0 auto">
        

            <Image width={"auto"} display={"block"} height="fit-content"   src='https://repository-images.githubusercontent.com/279082266/b8182f80-a7a4-11eb-8dac-76f63bbfd684'/>
        
        
    </Box>
        <Heading p={"10px 0%"} width={"30%"} m={"4% auto 0% auto"} bgColor="green" color={"white"} fontWeight={"400"} textAlign={"center"} >Enter OTP to Confirm</Heading>
    <Box  p={"5px 0%"} width="30%" boxShadow= "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" display={"block"} margin={"0% auto 3% auto"}>
            <PinInput type='password' mask placeholder='*' onChange={changeHandler}>
                <Box display={"flex" } mt="8%" gap="3%" justifyContent="center">
                    <PinInputField textAlign={"center"} outline="none" width={"50px"} height={"50px"} display="block" />
                    <PinInputField textAlign={"center"} outline="none" width={"50px"} height={"50px"} display="block"/>
                    <PinInputField textAlign={"center"} outline="none" width={"50px"} height={"50px"} display="block"/>
                    <PinInputField textAlign={"center"} outline="none" width={"50px"} height={"50px"} display="block"/>
                </Box>
            </PinInput>
        
        <Button transition={"linear 0.5s"} _hover={{backgroundColor:"grey"}}  display={"block"} borderRadius="3px"  bgColor="green" color={"white"} margin={"8% auto 0% auto"} border={"none"} outline="none" p={"3%"} fontSize="1.2rem">Validate</Button>
    </Box>
        <Image  display={"block"}  margin="10% auto 0% auto" src={payhere} />
    </>
  )
}

export default CompletePayment
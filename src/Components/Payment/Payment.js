import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button, Spinner } from "@chakra-ui/react";
import { Checkbox, FormControl, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { BsFillCartCheckFill,BsInfoCircleFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import MiniCart from "../MiniCart/MiniCart";
import Modals from "../ThankYou/Modal";
import checkout from "../ThankYou/Checkmark.gif"

const Payment = () => {
  const [isTablet] = useMediaQuery("(max-width:900px)");
  const [selected,setSelect] = useState(1);
  const [selected1,setSelect1] = useState(1);
  const [isLoading,setLoading] =useState(false);
  const [isSucess,setSucess] =useState(false);


  const sucessPayment =()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      setSucess(true);
    },1000)
    setTimeout(()=>{
      setSucess(false);
    },4000)

    
  }



  return (
    <Box
      backgroundColor="white"
      padding="0% 13%"
      borderRight="3px solid #e4e4e4"
    >
      <Image
        marginTop="5%"
        marginBottom="0%"
        height="2.8em"
        src="https://cdn.shopify.com/s/files/1/0250/1519/files/esq-logo-110419_236x65_ca22d1fc-ae73-40f7-a98a-081cfc10b4f2.png?29514"
      />
      <Text color="#ae867a" fontSize="0.8rem" fontWeight="medium">
        Cart &gt; Information &gt; Shipping &gt;
        <span style={{ color: "black" }}> Payment </span>
      </Text>

      {isTablet ? (
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton border="none">
                <Box flex="1" alignItems="center" textAlign="center" p="2% 0%">
                  <BsFillCartCheckFill /> Show/Hide Order Summary
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MiniCart />
              <hr />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        ""
      )}

      <Box
        border="2px solid #e4e4e4"
        borderRadius="8px"
        p="1% 2%"
        display="grid"
        gridTemplateColumns="20% 60% 20%"
      >
        <Text
          paddingTop="0"
          color="#737373"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Contact
        </Text>
        <Text
          paddingTop="0"
          color="#333333"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          {"ranankitr@outlook.com"}
        </Text>
        <Text
          paddingTop="0"
          color="#ae867a"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Change
        </Text>

        <Text
          paddingTop="0"
          color="#737373"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Ship To
        </Text>
        <Text
          paddingTop="0"
          color="#333333"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          {"New Delhi"}
        </Text>
        <Text
          paddingTop="0"
          color="#ae867a"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Change
        </Text>

        <Text
          paddingTop="0"
          color="#737373"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Method
        </Text>
        <Text
          paddingTop="0"
          color="#333333"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Standard Shipping (3-5 Business Days)
        </Text>
        <Text
          paddingTop="0"
          color="#ae867a"
          paddingBottom="1%"
          borderBottom="1px solid #e4e4e4"
        >
          Change
        </Text>
      </Box>
      
      <Text color="#333333" mt="8%" fontSize="1.3rem" fontWeight="400" mb="0">
        Payment
      </Text>
      <Text color="#333333" mt="5px" fontSize="0.9rem">
        All transactions are secure and encrypted
      </Text>

      <Accordion mb="2%" mt="5%" defaultIndex={[0]} >
        <AccordionItem mb="0">
          <h2 style={{marginBottom:"5px",marginTop:"5px"}}>
            <AccordionButton
              mb="0"
              p="3px 5px"
              bg="white"
              border="1px solid #d9d9d9"
              borderRadius="5px 5px 0 0"
              onClick={()=>setSelect(1)}
            >
              <Box display="flex" justifyContent="space-between" flex="1" textAlign="left">
                <Box display="flex" alignItems="center" gap="5px">
                  <Box h="15px" w="15px" border="2px solid #ae867a" borderRadius="50%">

                    <Box
                    mt="0"
                    mb="0"
                    w="5px"
                    h="5px"
                    borderRadius="50%"
                    border={selected===1?"5px solid #ae867a":"5px solid white"}
                    ></Box>
                    </Box>
                    <Image src="https://www.nicepng.com/png/detail/87-870107_credit-cards-logo-png-credit-card-logo-png.png" width="40px" height="30px" ></Image>
                    
                  </Box>
                
                  <Image
                    src="https://discoversignage.com/uploads/18-05-22_02:13_4-LOGO~1.PNG"
                    h="40px"
                  ></Image>
               
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel  p="1%" mt="0" border="1px solid #e4e4e4" borderRadius="0 0 5px 5px">
          <FormControl  sx={{ display: "grid", gap: "10px",marginBottom:"2%",width:"100%" }}>

            <Box width="100%" position="relative">
              <TextField sx={{width:"100%"}} id="filled-number" label="Card Number"   />
              <HiLockClosed style={{position:"absolute",top:"30%",right:"2%",fontSize:"1.2rem",color:"#919191"}} />
            </Box>
            <TextField sx={{width:"100%"}} id="filled-number" label="Name on Card"   />
            <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap="5px" >

            <TextField sx={{width:"100%"}} id="filled-number" label="Expiry Date (MM/YY)"   />
            <Box width="100%" position="relative">

              <TextField sx={{width:"100%"}} id="filled-number" label="Security Code"   />
              <BsInfoCircleFill style={{position:"absolute",top:"30%",right:"4%",fontSize:"1.2rem",color:"#919191"}}/>
            </Box>
            </Box>
          </FormControl>

          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt="0">
          <h2 style={{marginBottom:"5px",marginTop:"5px"}}>
            <AccordionButton
              mt="0"
              p="12px 1%"
              bg="white"
              border="1px solid #d9d9d9"
              borderRadius="5px 5px 0 0"
              onClick={()=>setSelect(2)}
              
            >
              <Box display="flex" justifyContent="space-between" flex="1" textAlign="left">
                <Box display="flex" alignItems="center" gap="8px">
                <Box h="15px" w="15px" border="2px solid #ae867a" borderRadius="50%">

                  <Box
                    mt="0"
                    mb="0"
                    
                    w="5px"
                    h="5px"
                    borderRadius="50%"
                    border={selected===2?"5px solid #ae867a":"5px solid white"}
                    ></Box>
                    </Box>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
                    h="20px"
                  ></Image>
                  
                </Box>
                
               
              </Box>
              
            </AccordionButton>
          </h2>
          <AccordionPanel p="1%" mt="0" border="1px solid #e4e4e4" borderRadius="0 0 5px 5px" >
          <Image display="block" margin="auto" src="https://cdn.iconscout.com/icon/free/png-256/webpage-window-blank-page-layout-design-wireframe-4-22225.png" ></Image>
          <Text mt="0" textAlign="center" >After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text color="#333333" mt="13%" fontSize="1.3rem" fontWeight="400" mb="0">
      Billing address
      </Text>
      <Text color="#333333" mt="5px" fontSize="0.9rem" >
      Select the address that matches your card or payment method.
      </Text>
      <Box mt="3%">
      <h2 style={{marginBottom:"5px",marginTop:"5px"}}>
            <Box
              mb="0"
              p="3px 5px"
              bg="white"
              border="1px solid #d9d9d9"
              borderRadius="5px 5px 0 0"
              onClick={()=>setSelect1(1)}
            >
              <Box display="flex" justifyContent="space-between" flex="1" textAlign="left">
                <Box display="flex" alignItems="center" gap="5px">
                  <Box h="15px" w="15px" border="2px solid #ae867a" borderRadius="50%">

                    <Box
                    mt="0"
                    mb="0"
                    w="5px"
                    h="5px"
                    borderRadius="50%"
                    border={selected1===1?"5px solid #ae867a":"5px solid white"}
                    ></Box>
                    </Box>
                    <Text fontSize="0.9rem" fontWeight="400">

                    Same as Shipping Address
                    </Text>
                    
                  </Box>
                
                  
               
              </Box>
              
            </Box>
          </h2>
      <h2 style={{marginBottom:"5px",marginTop:"5px"}}>
            <Box
              mb="0"
              p="3px 5px"
              bg="white"
              border="1px solid #d9d9d9"
              borderRadius="5px 5px 0 0"
              onClick={()=>setSelect1(2)}
            >
              <Box display="flex" justifyContent="space-between" flex="1" textAlign="left">
                <Box display="flex" alignItems="center" gap="5px">
                  <Box h="15px" w="15px" border="2px solid #ae867a" borderRadius="50%">

                    <Box
                    mt="0"
                    mb="0"
                    w="5px"
                    h="5px"
                    borderRadius="50%"
                    border={selected1===2?"5px solid #ae867a":"5px solid white"}
                    ></Box>
                    </Box>
                    <Text fontSize="0.9rem" fontWeight="400">

                    Use a diffrent billing Address
                    </Text>
                    
                  </Box>
                
                  
               
              </Box>
              
            </Box>
          </h2>
      </Box>

      <Text color="#333333" mt="8%" fontSize="1.3rem" fontWeight="400" mb="0">
        Remember Me
      </Text>
      <Box mb="5%" mt="3%" border="1px solid #d9d9d9" padding="10px" borderRadius="8px" >

        <FormControlLabel
            control={
              <Checkbox
                sx={{ margin: "0 0", padding: "0 1",fontSize:"0.9rem" }}
                border="1px solid green"
                color="success"
                
              />
            }
            label="Save my information for faster checkout "
          />
      </Box>
      <Box mb="10%" display="flex" justifyContent="space-between" alignItems="center"  >
            <Text _hover={{color:"pink"}} cursor="pointer" p="8px" borderRadius="8px" color="#a07264" m="0 0" fontSize="1rem" >&#60; Return to cart</Text>
            <Button  border="none" transition="all 0.2s linear;" borderRadius="5px"  _hover={{backgroundColor:"grey"}} bg="#1b2120" color="white" display="flex" gap="2%" w="25%"  height="40px"  p="0" fontWeight="medium" fontSize={isTablet?"2.5vw":"1.5vw"}>  <Text display="flex" alignItems="center" onClick={sucessPayment} >Pay Now</Text></Button>
      </Box>
      
      <Box display="flex" gap="5%">
        <Text fontSize="0.8rem" p="0" color="#a07264" bg="transparent" border="none">Refund Policy</Text>
        <Text fontSize="0.8rem" p="0" color="#a07264" bg="transparent" border="none">Privacy Policy</Text>
        <Text fontSize="0.8rem" p="0" color="#a07264" bg="transparent" border="none">Terms of Service</Text>
      </Box>
      {isLoading?<Modals bool={true}>
        
        <Image height="150px" width="150px"  src="https://gifimage.net/wp-content/uploads/2017/09/animated-loading-gif-transparent-background-8.gif"></Image>
        
      </Modals>:""}
      {isSucess?<Modals bool={true}>
        <Image height="250px" width="350px"  src={checkout}></Image>
      </Modals>:""}
    </Box>
  );
};

export default Payment;

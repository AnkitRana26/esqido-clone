import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  // Button,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  
} from "@mui/material";

// import { Link } from "react-router-dom";
import shopPay from "../Cart/shopPay.png"
import payPal from "../Cart/payPal.png"
import gPay from "../Cart/gPay.jpg"
import MiniCart from "../MiniCart/MiniCart";
import { BsFillCartCheckFill } from "react-icons/bs";

const initialForm = {
  country: "",
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  pincode: "",
  phone: "",
};

const AddressForm = () => {
  const [form, setForm] = useState(initialForm);
  const [isTablet] = useMediaQuery("(max-width:900px)");

  const changeHandler=(event)=>{
        let {name,value} = event.target;
        setForm(prev=>{
            return {...prev,[name]:value};
        })
  }

  return (
    <Box backgroundColor="white" padding="0% 10%" borderRight="3px solid #e4e4e4" >
        <Image marginTop="5%" marginBottom="0%"   height="2.8em"  src="https://cdn.shopify.com/s/files/1/0250/1519/files/esq-logo-110419_236x65_ca22d1fc-ae73-40f7-a98a-081cfc10b4f2.png?29514" />
      <Text fontSize="0.8rem" color="#ae867a" fontWeight="medium">
        Cart &gt; <span style={{ color: "black" }}>Information</span> &gt;
        Shipping &gt; Payment
      </Text>
      
      {isTablet?<Accordion  allowMultiple>
                <AccordionItem>
                        <h2>
                          <AccordionButton border="none">
                            <Box flex='1' alignItems="center" textAlign='center' p="2% 0%" >
                            <BsFillCartCheckFill/> Show/Hide Order Summary
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <MiniCart/>
                          <hr/>
                        </AccordionPanel>
                </AccordionItem>
      </Accordion>:""}




      <Text fontSize="1.3rem" mt="5%">
        Contact Information
      </Text>
      <Box
        fontWeight="medium"
        display="flex"
        alignContent="center"
        gap={isTablet ? "3%" : "1%"}
      >
        <Box
          mt="10"
          h="60px"
          borderRadius="8px"
          bg="#d8d8d8"
        >
          <Image
            padding="0"
            width="60px"
            height="60px"
            src="https://www.mobisafar.com/images/user.png"
          ></Image>
        </Box>
        <Box>
          <Text
            display={isTablet ? "grid" : "block"}
            p="0"
            color="#545454"
            mb="0"
            fontSize="1rem"
          >
            <span>{"Ankit Rana"}</span>{" "}
            <span>({"ranaankitr@outlook.com"})</span>
          </Text>
          <Button
            fontSize="1rem"
            p="0"
            color="#a07264"
            bg="transparent"
            border="none"
          >
            Log Out
          </Button>
        </Box>
      </Box>
      <Box>
        
      </Box>

      <Text fontSize="1.3rem" mt="5%">
        Shipping address
      </Text>

      <FormControl fullWidth sx={{ display: "grid", gap: "15px",marginBottom:"8%" }}>
        <TextField
          required
          id="required"
          label="Country/Region"
          name="country"
          onChange={changeHandler}
        />
        <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap="1%">
          <TextField
            required
            id="required"
            label="First Name"
            name="firstName"
            onChange={changeHandler}
        />
          <TextField onChange={changeHandler} required id="required" label="Last Name" name="lastName" />
        </Box>
        <TextField onChange={changeHandler} id="required" label="Company (Optional)" name="company" />
        <TextField onChange={changeHandler} name="address" id="required" label="Address" />
        <TextField onChange={changeHandler} name="apartment" id="required" label="Apartment, suite, etc. (Optional)" />
        <Box display="grid" gridTemplateColumns="repeat(3,1fr)" gap="1%">
          <TextField onChange={changeHandler} name="city" required id="required" label="City" />
          <TextField onChange={changeHandler} name="state" required id="required" label="State" />
          <TextField onChange={changeHandler} name="pincode" required id="required" label="Zip Code" />
        </Box>
        <TextField onChange={changeHandler} name="phone" required id="required" label="Phone (Optional)" />
        <FormControlLabel
          control={
            <Checkbox
              sx={{ margin: "0 0", padding: "0 1" }}
              border="2px solid green"
              color="success"
              defaultChecked
            />
          }
          label="Email me with news and offers"
        />
        <Box display="flex" justifyContent="space-between" alignItems="center"  >
            <Text _hover={{color:"pink"}} cursor="pointer" p="8px" borderRadius="8px" color="#a07264" m="0 0" fontSize="1rem" >&#60; Return to cart</Text>
            <Button  border="none" transition="all 0.2s linear;" borderRadius="5px"  _hover={{backgroundColor:"grey"}} bg="#1b2120" color="white" display="flex" gap="2%" w="27%"  height="45px"  p="0" fontWeight="bold" fontSize={isTablet?"2.5vw":"1.7vw"}>  <Text display="flex" alignItems="center" >Sumbit</Text></Button>
        </Box>
      </FormControl>
      <Box display="flex" gap="5%">
        <Text fontSize="0.8rem" p="0" color="#a07264" bg="transparent" border="none">Refund Policy</Text>
        <Text fontSize="0.8rem" p="0" color="#a07264" bg="transparent" border="none">Privacy Policy</Text>
        <Text fontSize="0.8rem" p="0" color="#a07264" bg="transparent" border="none">Terms of Service</Text>
      </Box>
    </Box>
  );
};

export default AddressForm;

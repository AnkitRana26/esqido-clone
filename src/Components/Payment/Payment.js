import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Image } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import MiniCart from '../MiniCart/MiniCart'

const Payment = () => {
    const [isTablet] = useMediaQuery("(max-width:900px)");





  return (
    <Box backgroundColor="white" padding="0% 10%" borderRight="3px solid #e4e4e4" >
        <Image marginTop="5%" marginBottom="0%"   height="2.8em"  src="https://cdn.shopify.com/s/files/1/0250/1519/files/esq-logo-110419_236x65_ca22d1fc-ae73-40f7-a98a-081cfc10b4f2.png?29514" />
      <Text color="#ae867a" fontSize="0.8rem" fontWeight="medium">
        Cart &gt; Information &gt;
        Shipping &gt;<span style={{ color: "black" }}> Payment </span>
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


        <Box border="2px solid #e4e4e4" borderRadius="8px" p="1% 2%"  display="grid" gridTemplateColumns="20% 60% 20%">
            <Text paddingTop="0" color="#737373" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Contact</Text>
            <Text paddingTop="0" color="#333333" paddingBottom="1%" borderBottom="1px solid #e4e4e4">{"ranankitr@outlook.com"}</Text>
            <Text paddingTop="0" color="#333333" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Change</Text>
            
            <Text paddingTop="0" color="#737373" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Ship To</Text>
            <Text paddingTop="0" color="#333333" paddingBottom="1%" borderBottom="1px solid #e4e4e4">{"New Delhi"}</Text>
            <Text paddingTop="0" color="#333333" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Change</Text>
            
            <Text paddingTop="0" color="#737373" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Method</Text>
            <Text paddingTop="0" color="#333333" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Standard Shipping (3-5 Business Days)</Text>
            <Text paddingTop="0" color="#333333" paddingBottom="1%" borderBottom="1px solid #e4e4e4">Change</Text>
        </Box>
    </Box>
  )
}

export default Payment
import { Box } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"

const Scroll2Top = () => {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          
        });
      };
  return <Box onClick={scrollToTop} cursor={"pointer"} bgColor={"rgb(174, 134, 122)"} color="white" display={"flex"} alignItems="center" justifyContent="center" height="60px" width="60px" borderRadius="50%"  position={"fixed"} bottom="8%" right="4%">
    <AiOutlineArrowUp fontSize={"1.8rem"}/>
  </Box>
}

export default Scroll2Top
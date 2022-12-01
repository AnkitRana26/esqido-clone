import React from "react";
// import { Box, Button } from "@chakra-ui/react";
import Discription from "../../Components/Product-Discription/Discription";
import ImageBox from "../../Components/Product-Discription/ImageBox";
import './ProductDiscription.css'
import { Reviews } from "../../Components/Product-Discription/reviews/Reviews";
import { AcordianDiscription } from "../../Components/Product-Discription/acordianDiscription/AccordianDiscription";
import ReviewForm from "../../Components/Product-Discription/ReviewForm/ReviewForm";


function ProductDiscription() {
  return(
    
      
    
    <div className="mainDiv">

    
    <div id="product-description-box">
        <ImageBox/>
        <Discription/>
        
  </div>
        <AcordianDiscription/>
        <ReviewForm/>
        <Reviews/>
  </div>
  
  ) 
}
export default ProductDiscription;

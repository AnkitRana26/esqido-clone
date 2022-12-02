import React, { useEffect, useState } from "react";
// import { Box, Button } from "@chakra-ui/react";
import Discription from "../../Components/Product-Discription/Discription";
import ImageBox from "../../Components/Product-Discription/ImageBox";
import './ProductDiscription.css'
import { Reviews } from "../../Components/Product-Discription/reviews/Reviews";
import { AcordianDiscription } from "../../Components/Product-Discription/acordianDiscription/AccordianDiscription";
import ReviewForm from "../../Components/Product-Discription/ReviewForm/ReviewForm";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { Box } from "@chakra-ui/react";


function ProductDiscription() {
  const [prodData,setProdData] = useState({});
  const [isLoading,setLoading] = useState(true);
  let {id} = useParams();
useEffect(()=>{
  fetchData();
},[id])

async function fetchData(){
  setLoading(true);
  let res=await fetch(`https://esqido-data.onrender.com/products/${id}`)
  let data = await res.json()
  // console.log(data);
  setProdData(data);
  setLoading(false);
}
  return(
    
      
    isLoading?<Box width={"80%"} margin="auto" display={"grid"} gridTemplateColumns={"60% 40%"}  >
          <Skeleton width="100%" height="500px"/>
          <Skeleton width="100%" height="500px"/>
        </Box>:
    <div className="mainDiv">
        
    
        <div id="product-description-box">
             
                
              <ImageBox prodData = {prodData}/>
             <Discription prodData = {prodData}/>
              
        </div>
        <AcordianDiscription/>
        {/* <ReviewForm/> */}
        <Reviews/>
  </div>
  
  ) 
}
export default ProductDiscription;

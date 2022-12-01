import { Image } from "@chakra-ui/react";
import { useState } from "react";
import ProductImage from "./ProductImage";
import './ImageList.css'


function ImageList(props){
    let {arr,image,setImage} =props.data;
    return (
        <div id="image-list">
            {
                arr.map((elem)=>{
                    return <Image w={'70%'}  borderRadius="5px" boxShadow={elem === image?'0 0 8px #AE867A':""} onClick={()=>{setImage(elem)}} src={elem} />
                })
            }
        </div>
    )
}
export default ImageList;
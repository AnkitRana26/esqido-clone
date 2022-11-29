import { Box } from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import ImageList from "./ImageList";
import ProductImage from "./ProductImage";
import './ImageBox.css'
import { useEffect, useState } from "react";

let arr = [
    "https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-b_640x640.gif?v=1628635003",
    "https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-1_672x672.jpg?v=1628635013",
    "https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-3_672x672.jpg?v=1628635014",
    "https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-2_672x672.jpg?v=1628635013",
    "https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-4_672x672.jpg?v=1628635014",
    
];
function ImageBox(){
    const [image, setImage] = useState(arr[0]);
    
    return (
        <div id="image-box">
            <ImageList data={{arr,image,setImage}}/>
            <ProductImage data={image}/>
        </div>
    )
}

export default ImageBox;
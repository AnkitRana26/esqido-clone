
import ImageList from "./ImageList";
import ProductImage from "./ProductImage";
import './ImageBox.css'
import { useState } from "react";



function ImageBox({prodData}){
    let arr = []
    for(let key in prodData){
        if(key.includes("img")){
            arr.push(prodData[key]);
        }
    }
    const [image, setImage] = useState(arr[1]);
    // console.log(arr);
    return (
        <div id="image-box">
            <ImageList data={{arr,image,setImage}}/>
            <ProductImage data={image}/>
        </div>
    )
}

export default ImageBox;
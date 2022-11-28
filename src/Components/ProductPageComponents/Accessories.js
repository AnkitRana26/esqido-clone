import React, { useState } from "react";
import { Box ,Heading,Text,Grid,Avatar,GridItem,Select,Stack} from "@chakra-ui/react";
import {Link} from "react-router-dom";


let ProductData=[
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        price:12,
    },
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-1_384x384.jpg?v=1644364787",
        title:"Companion Eyelash Glue",
        price:14,
    },
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-b_384x384.gif?v=1628635003",
        title:"Companion Eyelash Glue",
        price:28,
    },
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-white-1_384x384.jpg?v=1641598386",
        title:"Companion Eyelash Glue",
        price:14.98,
    },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/4/d4647fdMAMAE00000439_1.jpg",
        title:"Companion Eyelash Glue",
        price:32,
    },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/9/7964a078904325004014.jpg",
        title:"Companion Eyelash Glue",
        price:19,
    },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/6/066c973N_8904052432975_1.jpg",
        title:"Companion Eyelash Glue",
        price:25,
    },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/f/0f92e506902395234708.jpg",
        title:"Companion Eyelash Glue",
        price:21,
    }
]
const Accessories=()=>{
    const [sort,setSort]=useState("");

   const handleChange=(e)=>{
    console.log(e.target.value)
    setSort(e.target.value);
    
    sort==="low to high" ?
    ProductData.sort((a,b)=>{
        // if(a.price>b.price) return 1;
        // if(a.price <b.price) return -1;
        return b.price-a.price;
       
    }):
     

    ProductData.sort((a,b)=>{
        // if(a.price>b.price) return -1;
        // if(a.price <b.price) return 1;
        return a.price-b.price
    })

   }

    return (
        <Box className="accessories_comp" bg="#ffffff">
           
            <Text><span style={{color:"#c0867a"}}>Home</span> <span>{`>`}</span> <span>Accessories</span></Text>
            <Heading as='h1' size='4xl'>Accessories</Heading>
            <Text>Shop Essential Accessories</Text>
            <Box>
            <Select onChange={handleChange} placeholder='Sort Price' variant='flushed' size='lg'>
                <option value='low to high'>Low to High</option>
                <option value='high to low'>High to Low</option>
            </Select>
            </Box>
            <Grid gridTemplateColumns='repeat(4,1fr)' gap={20}>
                
            {ProductData.map((ele,i)=>{
                return (
                    //  <CardBody key={i}>
                    
                        <GridItem key={i}>
                            <Avatar src={ele.img} />
                            <Text>{ele.title}</Text>
                            <Text>${ele.price} USD</Text>
                        </GridItem>
                        
                        // </CardBody>
                   
                )
            })}
             </Grid>
        </Box>
    )
}

export default Accessories
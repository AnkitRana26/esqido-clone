import React, { useState } from "react";
import { Box ,Heading,Text,Grid,Image,GridItem,Select,Stack} from "@chakra-ui/react";


let ProductData=[
    {
        img1:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue_523x523.jpg?v=1662475132",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-eyelash-glue-companion-wbg-amz-precision_523x523.jpg?v=1662475132",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-eyelash-glue-companion-wbg-amz-usp_523x523.jpg?v=1662475132",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-eyelash-glue-companion-wbg-azm-2_523x523.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        price:12,
        reviews:990,
        points:280,
    },
    {
        img1:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-1_384x384.jpg?v=1644364787",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-4_523x523.jpg?v=1644364787",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-3_523x523.jpg?v=1644364787",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-2_523x523.jpg?v=1644364787",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-5_523x523.jpg?v=1644364787",
        title:"Companion Lash Applicator",
        price:14,
        reviews:6,
        points:140,

    },
    {
        img1:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-b_384x384.gif?v=1628635003",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-1_523x523.jpg?v=1628635013",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-2_523x523.jpg?v=1628635013",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-3_523x523.jpg?v=1628635014",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-makeup-bag-4_523x523.jpg?v=1628635014",
        title:"Companion Makeup Bag",
        price:28,
        reviews:5,
        points:280,
    },
    {
        img1:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-white-1_384x384.jpg?v=1641598386",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-blue-1_523x523.jpg?v=1641846419",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-green-1_523x523.jpg?v=1641846419",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-white-2_523x523.jpg?v=1641846419",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-comp-mu-remover-product-page-features_4112beac-2651-4556-85f0-5d8193881e02_523x523.jpg?v=1641920535",
        title:"Reusable Makeup Rounds (5 rounds)",
        price:14.98,
        reviews:21,
        points:149,
    },
    {
        img1:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/4/d4647fdMAMAE00000439_1.jpg",
        title:"Companion Eyelash Glue",
        price:32,
    },
    {
        img1:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/9/7964a078904325004014.jpg",
        title:"Companion Eyelash Glue",
        price:19,
    },
    {
        img1:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/6/066c973N_8904052432975_1.jpg",
        title:"Companion Eyelash Glue",
        price:25,
    },
    {
        img1:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/f/0f92e506902395234708.jpg",
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
        <Box p={50}className="accessories_comp" bg="#ffffff">
           
            <Text fontSize="20px"><span style={{color:"#c0867a"}}>Home</span> <span>{`>`}</span> <span>Accessories</span></Text>
            <Heading as='h1' fontSize="50px">Accessories</Heading>
            <Text fontSize="24px" style={{marginTop:"10px"}}>Shop Essential Accessories</Text>
            <Box w="100%"  >
            <Select w="20%" m="auto" mb="20" p={10} fontSize="20px"  onChange={handleChange} placeholder='Sort Price' variant='flushed' size='lg'>
                <option value='low to high'>Low to High</option>
                <option value='high to low'>High to Low</option>
            </Select>
            </Box>
            <Grid gridTemplateColumns='repeat(4,1fr)' gap={20}>
                
            {ProductData.map((ele,i)=>{
                return (
                    //  <CardBody key={i}>
                    
                        <GridItem key={i}>
                            <Image boxSize='300px' src={ele.img1} />
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
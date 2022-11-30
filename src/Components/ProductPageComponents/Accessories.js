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
        discount:20,
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
        discount:33,

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
        discount:23,
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
        discount:10,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-liner-product-page-092822_2336b2a2-1a54-45d7-abe7-d907428b7a1c_720x721.jpg?v=1664497756",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-liner-4-colour-before-after_242x242.gif?v=1664497756",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-img-ad-060922-product-detail-4a_242x242.jpg?v=1664497756",

        title:"Smudge-free Eyeliner",
        mrp:18.00,
        price:13.50,
        discount:35,
        reviews:6443,
        points:270,
    },
    
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

   const handleImage=(img3,i)=>{
    console.log(1);
    document.getElementById(i).src=img3;
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
                            <Box pos="relative" textAlign="center">
                            <Image id={i} onMouseLeave={()=>handleImage(ele.img1,i)} onMouseEnter={()=>handleImage(ele.img3,i)} boxSize='300px' w="100%"src={ele.img1} />
                            <Box pos="absolute" bottom="1%" left="0" height="fit-content" bgColor="#ae867a"   w="30%" m="auto" color="white" p="3px">save {ele.discount}%</Box>
                            </Box>
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
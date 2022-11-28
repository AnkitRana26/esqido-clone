import React from "react";
import { Box ,Heading,Text,Grid,Avatar,GridItem} from "@chakra-ui/react";



let ProductData=[
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        price:12,
    },
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        price:14,
    },
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        price:28,
    },
    {
        img:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        price:14.98,
    }
]
const Accessories=()=>{



    return (
        <Box className="accessories_comp" bg="#ffffff">

            <Text><span>Home</span> <span>{`>`}</span> <span>Accessories</span></Text>
            <Heading as='h1' size='4xl'>Accessories</Heading>
            <Text>Shop Essential Accessories</Text>
            <Grid gridTemplateColumns='repeat(4,1fr)' gap={20}>
            {ProductData.map((ele,i)=>{
                return (
                    //  <CardBody key={i}>
                    
                        <GridItem >
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
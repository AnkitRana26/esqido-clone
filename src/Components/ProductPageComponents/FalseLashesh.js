import React from 'react';

import { Box ,Image,Grid ,Heading ,Text,GridItem} from '@chakra-ui/react';
import { Link } from 'react-router-dom';




const FalseData=[
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-complete-bundle_523x523.jpg?v=1647362184",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-see-all_32cd039f-212b-450e-a508-98a6999a8547_523x523.jpg?v=1647362184",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_f1842fc8-3908-4261-8b96-c146771196f2_523x523.jpg?v=1647362184",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_a711c08c-1035-4711-9367-8c47d519c15a_480x480.gif?v=1647362184",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_6df8f1e4-c377-4556-8028-583e37092de7_523x523.jpg?v=1647362182",
        title:"Unisyn Lash Bundle - All Styles",
        mrp:107.70,
        price:69.95,
        discount:35,
        reviews:124,
        points:699,
        discount:35,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-natural-bundle_523x523.jpg?v=1647362015",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-natural-bundle-see-all_523x523.jpg?v=1647362015",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_d15273c8-c90a-4813-8851-91656ab7886e_523x523.jpg?v=1647362015",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_dedd843b-1b2d-4c99-9007-173a2bb22d8d_480x480.gif?v=1647362015",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_82d3bc5c-5ab3-4753-87c5-c877b88b78be_523x523.jpg?v=1647362015",
        title:"Unisyn Lash Bundle-Natural Styles",
        mrp:53.85,
        price:39.95,
        discount:26,
        reviews:124,
        points:399,
        discount:26,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-glam-bundle_523x523.jpg?v=1647362049",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-glam-bundle-see-all_523x523.jpg?v=1647362049",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_d28245f1-0d1c-4b5d-a71a-cdcd1235bd47_523x523.jpg?v=1647362049",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_246dd0c1-a6ea-491b-adc1-15d201e865ae_480x480.gif?v=1647362044",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_bdba752e-4a03-486d-8ad5-51dbd7797e66_523x523.jpg?v=1647362044",
        title:"Unisyn Lash Bundle - Glam Styles",
        mrp:53.85,
        price:39.95,
        discount:26,
        reviews:124,
        points:399,
        discount:26,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-breadbutter_523x523.jpg?v=1643403579",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-before-after-breadbutter-k_523x523.jpg?v=1643662876",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_d97b5112-d111-4730-a2cd-bf7a5f796f9f_523x523.jpg?v=1643662852",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_83cef998-b2a0-4019-a6a1-5eec7b7f58cb_480x480.gif?v=1643663049",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-see-all_523x523.jpg?v=1643663049",
        title:"Bread & Butter",
        mrp:17.95,
        price:12.55,
        discount:30,
        reviews:124,
        points:270,
        discount:30,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-rhythmflow_523x523.jpg?v=1643641274",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-before-after-rhythmflow-k_523x523.jpg?v=1643641274",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_268d74fb-8a81-4886-b947-20529bdffa25_523x523.jpg?v=1643662962",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_80688382-3faa-458f-a765-482e91232150_523x523.jpg?v=1643662962",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_f334279c-2356-40a6-b40e-173aa20da9ba_480x480.gif?v=1643662962",
        title:"Rhythm & Flow",
        mrp:17.95,
        price:12.55,
        discount:30,
        reviews:124,
        points:270,
        discount:30,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-rhythmflow_523x523.jpg?v=1643641274",
        img2:"",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-before-after-peachescream-k_523x523.jpg?v=1643404060",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_80688382-3faa-458f-a765-482e91232150_523x523.jpg?v=1643662962",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_f334279c-2356-40a6-b40e-173aa20da9ba_480x480.gif?v=1643662962",
        title:"Peaches & Cream",
        mrp:17.95,
        price:12.55,
        discount:30,
        reviews:124,
        points:270,
        discount:30,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-rhythmflow_523x523.jpg?v=1643641274",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-before-after-peachescream-k_523x523.jpg?v=1643404060",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_80688382-3faa-458f-a765-482e91232150_523x523.jpg?v=1643662962",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_f334279c-2356-40a6-b40e-173aa20da9ba_480x480.gif?v=1643662962",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_268d74fb-8a81-4886-b947-20529bdffa25_523x523.jpg?v=1643662962",
        title:"Day & Night",
        mrp:17.95,
        price:12.55,
        discount:30,
        reviews:135,
        points:321,
        discount:30,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-rhythmflow_523x523.jpg?v=1643641274",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_0d4d8269-37e2-455d-87b4-41d1d35d9a67_523x523.jpg?v=1643663011",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-before-after-peachescream-k_523x523.jpg?v=1643404060",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_80688382-3faa-458f-a765-482e91232150_523x523.jpg?v=1643662962",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_f334279c-2356-40a6-b40e-173aa20da9ba_480x480.gif?v=1643662962",
        title:"Gin & Tonic",
        mrp:17.95,
        price:12.55,
        discount:30,
        reviews:120,
        points:98,
        discount:30,
    },
    {
        img1:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-rhythmflow_523x523.jpg?v=1643641274",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-eco-pkg_80688382-3faa-458f-a765-482e91232150_523x523.jpg?v=1643662962",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-flexible-band_f334279c-2356-40a6-b40e-173aa20da9ba_480x480.gif?v=1643662962",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-product-page-super-curl_268d74fb-8a81-4886-b947-20529bdffa25_523x523.jpg?v=1643662962",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-unisyn-v2-before-after-peachescream-k_523x523.jpg?v=1643404060",
        title:"Peace & Love",
        mrp:17.95,
        price:13.20,
        discount:30,
        reviews:654,
        points:345,
        discount:30,
    },
    {
        img1:"//cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue-open-bsamz-b_384x384.jpg?v=1662475132",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-accessories-eyelash-companion-glue_523x523.jpg?v=1662475132",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-eyelash-glue-companion-wbg-amz-precision_523x523.jpg?v=1662475132",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-eyelash-glue-companion-wbg-amz-usp_523x523.jpg?v=1662475132",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esqido-eyelash-glue-companion-wbg-azm-2_523x523.jpg?v=1662475132",
        title:"Companion Eyelash Glue",
        mrp:15,
        price:12,
        discount:20,
        reviews:990,
        points:280,
        discount:24,
    },
    {
        img1:"//cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-1_384x384.jpg?v=1644364787",
        img2:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-4_523x523.jpg?v=1644364787",
        img3:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-3_523x523.jpg?v=1644364787",
        img4:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-2_523x523.jpg?v=1644364787",
        img5:"https://cdn.shopify.com/s/files/1/0250/1519/products/esq-product-page-applicator-5_523x523.jpg?v=1644364787",
        title:"Companion Lash Applicator",
        mrp:20,
        price:14,
        discount:30,
        reviews:6,
        points:140,
        discount:28,
    },
    

]
 
const FalseLashesh = () => {

    const handleChange=(img3,i)=>{
        console.log(1);
        document.getElementById(i).src=img3;
    }
    return <Box mt={30} className='false_lashesh' >
        <Box ml={30} mb={20}><span style={{color:"#ae867a",fontSize:"20px"}}>Home </span>{`>`}<span style={{color:"#58595b",fontSize:"20px"}}>Unisyn False Lashes</span></Box>
        <Box w="96%"  m="auto"><Image w="100%" 
        
        src="//cdn.shopify.com/s/files/1/0250/1519/collections/esq-unisyn-false-eyelashes-collection-banner_1350x507.jpg?v=1643666933" /></Box>
        <Box ml={30}>
        <Heading as="h1" fontWeight="700" fontSize="2em" >Unisyn False Lashes</Heading>
        <Text color="#58595b">Discover Unisyn™ lashes, the world's first true premium synthetic false eyelashes, made with a blend of ultra-fine synthetic fibres for an ultra-natural look.</Text>
        </Box>
        <Grid w="96%" m="auto" gridTemplateColumns='repeat(4,1fr)' gap={20}>
        {FalseData.map((ele,i)=>{

            return <GridItem textAlign="left" key={i}>
                <Link style={{textDecoration:"none",color:"#58595b"}} to={`/productdescription/${ele.id}`}>
                    <Box pos="relative" textAlign="center">
                    <Image id={i} onMouseLeave={()=>handleChange(ele.img1,i)} onMouseEnter={()=>handleChange(ele.img3,i)} boxSize='300px' w="100%"src={ele.img1}/>
                    <Box pos="absolute" bottom="1%" left="0" height="fit-content" bgColor="#ae867a"   w="30%" m="auto" color="white" p="3px">save {ele.discount}%</Box>
                    </Box>
                    <Text color="#58595b">{ele.title}</Text>
                    <Text color="#ae867a" textDecoration="line-through">${ele.mrp}USD</Text>
                    <Text color="#1b2120">${ele.price} USD</Text>
                </Link>
            </GridItem>
            
        })}
        </Grid>
    </Box>;
}



export default FalseLashesh;
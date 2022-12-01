import React, { useEffect, useState } from "react";
import { Box ,Heading,Text,Grid,Image,GridItem,Stack, Button} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import "./FalseItem.css"
import { FormControl, MenuItem, Skeleton } from "@mui/material";
import {Select,InputLabel} from "@mui/material";
import Pagination from "../Pagination/Pagination";

let renderingData =[0,0,0,0,0,0,0,0];
const Accessories=()=>{
    const [sort,setSort]=useState("");
    const [displayData,setData]=useState([]);
    const [isLoading, setLoading]=useState(true);
    const [searchparam,setSearchParam] = useSearchParams({"_sort":"uniqueId","_order":"asc","_page":1,"_limit":12});
    const [currentPage,setCurrentPage] = useState(1);
    const [totalProducts,setTotalProducts] =useState(0);
        console.log(searchparam.get("_sort"))
    const sortChange=(event)=>{
        let copy = new URLSearchParams(searchparam);
        console.log(""+new URLSearchParams(searchparam))
        copy.set("_order",event.target.value);
        copy.set("_sort","price");
        setSearchParam(copy);
    }
    const filterChange=(event)=>{
        let copy = new URLSearchParams(searchparam);
        console.log(""+new URLSearchParams(searchparam))
        copy.set("category",event.target.value);
        setSearchParam(copy);
    }

    const changePages =(value)=>{
        let copy = new URLSearchParams(searchparam);
        copy.set("_page",currentPage+value);
        setSearchParam(copy);
        setCurrentPage(prev=>prev+value);
    }





    const getData=()=>{
        setLoading(true);
        fetch("https://esqido-data.onrender.com/products?"+new URLSearchParams(searchparam)).then(res=>{
            setTotalProducts(res.headers.get('X-Total-Count'));
            return res.json();
    }).then((data)=>{
        setData(data);
        
        setTimeout(()=>{
            setLoading(false);
        },1000)
        } );
    }
    useEffect(() => {
        getData();
    }, [searchparam])

   const handleChange=(e)=>{
    console.log(e.target.value)
    setSort(e.target.value);
    
    // sort==="low to high" ?
    // ProductData.sort((a,b)=>{
    //     // if(a.price>b.price) return 1;
    //     // if(a.price <b.price) return -1;
    //     return b.price-a.price;
       
    // }):
     

    // ProductData.sort((a,b)=>{
    //     // if(a.price>b.price) return -1;
    //     // if(a.price <b.price) return 1;
    //     return a.price-b.price
    // })

   }


   const handleCart=(e,ele)=>{
        e.preventDefault();
        console.log(ele);
        let newObj={...ele};
        delete newObj.id;
        fetch("https://esqido-data.onrender.com/cart",{
            method:"POST",
            body:JSON.stringify(newObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json()).then((data)=>{
            console.log(data);
        })
    
    }

    const changeByClick=(value)=>{
        let copy = new URLSearchParams(searchparam);
        copy.set("_page",value);
        setSearchParam(copy);
        setCurrentPage(prev=>value);
    }
   
    const handleImage=(img3,i)=>{
    
        document.getElementById(i).src=img3;
    }

    return (
        <Box p={50}className="accessories_comp" bg="#ffffff">
           
            <Text fontSize="20px"><span style={{color:"#c0867a"}}>Home</span> <span>{`>`}</span> <span>Accessories</span></Text>
            <Heading as='h1' fontSize="50px">Accessories</Heading>
            <Text fontSize="24px" style={{marginTop:"10px"}}>Shop Essential Accessories</Text>
            <Box p={"1% 0%"} w="100%" m="auto" gap="8px" justifyContent="right" display="flex" >
                
                        
                    <FormControl  >
                        

                            <InputLabel sx={{fontSize:"1rem",backgroundColor:"white",padding:"2px"}} id="label">Sort By Price</InputLabel>
                            <Select
                            labelId="label"
                            id="label"
                            onChange={(e)=>sortChange(e)}
                            sx={{width:"180px"}}
                            label="Age"
                            
                            >
                            
                            <MenuItem value={'asc'}>Low to High</MenuItem>
                            <MenuItem value={'desc'}>High to Low</MenuItem>
                            
                            </Select>
                        
                        
                    </FormControl>
                    <FormControl >

                        <InputLabel sx={{fontSize:"1rem",backgroundColor:"white",padding:"2px"}} id="label">Filter By Category</InputLabel>
                        <Select
                            labelId="label"
                            id="label"
                            onChange={(e)=>filterChange(e)}
                            sx={{width:"180px"}}
                            label="Age"
                        
                        >
                        
                        <MenuItem value={'makeup'}>MakeUp</MenuItem>
                        <MenuItem value={'skin'}>Skin</MenuItem>
                        <MenuItem value={'hair'}>Hair</MenuItem>
                        
                        </Select>
                        
                    </FormControl>
                
            </Box>
            {isLoading? 
        <Box className='falseItem' w="100%" m="auto" display="grid" gridTemplateColumns='repeat(4,1fr)'  > 
            {renderingData.map((ele)=>{
            return <Box display={"grid"} p="5px" gap="5px">
                        <Skeleton variant='rounded' width={"100%"} height="250px"  />
                        <Skeleton variant='rounded' width={"100%"} height="70px"  />
                        <Skeleton variant='rounded' width={"100%"} height="70px"  />

                </Box>
            
            })}
        </Box> :
            <Grid className="falseItem" gridTemplateColumns='repeat(4,1fr)' gap={20}>
                
            {displayData.map((ele,i)=>{
                return (
                    //  <CardBody key={i}>
                        
                        <GridItem key={i}>
                            <Link style={{textDecoration:"none",color:"#58595b"}} to={`/productdescription/${ele.id}`}>
                                <Box pos="relative" textAlign="center">
                                <Image id={i} onMouseLeave={()=>handleImage(ele.img1,i)} onMouseEnter={()=>handleImage(ele.img3,i)} boxSize='300px' w="100%"src={ele.img1} />
                                <Box pos="absolute" bottom="1%" left="0" height="fit-content" bgColor="#ae867a"   w="30%" m="auto" color="white" p="3px">save {ele.discount}%</Box>
                                </Box>
                                <Box>
                                    <Box>
                                        <Text color="#58595b" noOfLines={1}>{ele.title}</Text>
                                        <Text color="#ae867a" textDecoration="line-through">${((ele.price)*120/100).toFixed(0)} USD</Text>
                                    </Box>
                                    <Box display="flex" textAlign="center" alignItems="center">
                                        <Text color="#1b2120">${ele.price} USD</Text>
                                        <Box className='add_to' w="50%" m="auto" mr="0"> <Button onClick={(e)=>handleCart(e,ele)} w="100%" fontSize="17px" p={5} style={{letterSpacing:"0.02em", color:"white",backgroundColor:"#ae867a",border:"none" ,borderRadius:"4px",cursor:"pointer"}}>Add to cart</Button></Box>
                                    </Box>
                                </Box>
                            </Link>
                        </GridItem>
                        
                        // </CardBody>
                   
                )
            })}
             </Grid>}
             <Pagination currentPage={currentPage} changeByClick={changeByClick} setCurrentPage={changePages} totalProducts={totalProducts}/>
        </Box>
    )
}

export default Accessories
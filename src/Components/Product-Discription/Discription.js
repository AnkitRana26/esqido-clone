// import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Select, Text } from "@chakra-ui/react";
import { ColorComponent } from "./colorComponent/ColorComponent";
import {BiGift} from 'react-icons/bi';
import {MdError} from 'react-icons/md';
import {AiFillCheckCircle} from 'react-icons/ai';


import Ratings from "./rating/Ratings";
import "./Discription.css";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { Alert, CircularProgress, Container, Snackbar } from "@mui/material";

function Discription({prodData}) {
  const [showAlert,setAlert] = useState(false);
  const [showSucess,setSucess] = useState(false);
  const [cartLoading,setCartLoading] =useState(false);
  const postData =async(propdata)=>{
      let newData={...propdata};
      delete newData.id;
      let res =await fetch(`https://esqido-data.onrender.com/cart`,{
        method:"POST",
        body:JSON.stringify(newData),
        headers:{
          "Content-Type":"application/json"
        }
      })
      let data = await res.json();
      console.log(data);
      setSucess(true);
      setCartLoading(false);
      setTimeout(() => {
        
        setSucess(false);
        
      }, 2000);

  }
  const addToCart=async(propdata)=>{
    setCartLoading(true);
    
    let res=await fetch(`https://esqido-data.onrender.com/cart?uniqueId=${propdata.uniqueId}`)
    let data = await res.json()
    console.log(data);
    if(data.length>0){
      setAlert(true);
     
      setCartLoading(false);

      setTimeout(() => {
        
        setAlert(false);

      }, 2000);
    }
    else{
      postData(propdata);
      

    }
  }





  return  (
    <div id="discription-box">
      <h1>{prodData.title}</h1>
      <Box>
        <Box marginTop={"-20px"} display="flex" alignItems="center">
          <Ratings data={4.5}/>
          <div style={{ marginLeft: "8px",fontWeight:'600',display:"flex" , justifyContent:"space-between",width:'100%' }}><p>500+ Reviews</p><p style={{display:"flex",alignItems:"center"}}><BiGift color="#C2A284"/>&nbsp; {prodData.points} Points</p></div>
        </Box>
        <h2 className="price">
          <span className="originalPrice">${(prodData.price * 110) / 100}</span>
          &nbsp;&nbsp;<span className="currentPrice">${prodData.price}</span>&nbsp;
          <span className="discount">10% OFF</span>
        </h2>
        <p>
          The perfect Companion for your makeup kit. The Esqido makeup bag is
          made from premium polyester, with a soft roll top for extended
          capacity. With a laser engraved silver emblem on the front of the bag
          and a matching zipper, it's elegant and minimal.
        </p>
        <ColorComponent />
        <Box display={"flex"} gap="1%">
          <select
            placeholder="Select option"
            style={{ width: "25%", height: "50px", fontSize: "1rem" }}
          >
            <option
              value="1"
              style={{
                textAlign: "center",
                padding: "2%",
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              1
            </option>
            <option
              value="2"
              style={{
                textAlign: "center",
                padding: "2%",
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              2
            </option>
            <option
              value="3"
              style={{
                textAlign: "center",
                padding: "2%",
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              3
            </option>
            <option
              value="4"
              style={{
                textAlign: "center",
                padding: "2%",
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              4
            </option>
            <option
              value="5"
              style={{
                textAlign: "center",
                padding: "2%",
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              5
            </option>
            <option
              value="6"
              style={{
                textAlign: "center",
                padding: "2%",
                fontSize: "1rem",
                marginBottom: "30px",
              }}
            >
              6
            </option>
          </select>
          <Button
            border={"none"}
            borderRadius="5px"
            // borderColor={'black'}
            fontSize={"1.1rem"}
            colorScheme="teal"
            variant="outline"
            bg={"green"}
            color={"white"}
            w={"70%"}
            onClick={(()=>addToCart(prodData))}
          >
            {cartLoading?<CircularProgress color="inherit" />:"ADD TO CART"}
            
          </Button>
        </Box>
        <div className="iconBox">
          <div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_06_27T05_20_53_680Z_1_5daa4ffa-b7f7-45c4-b6d5-56be26b8678b.png?v=1665228581"
                alt="shiping"
              />
              <p>Free Shiping</p>
            </div>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_06_27T05_24_08_637Z_1_2cc8dff0-7aa1-4cd3-b9ed-8f27af85717d.png?v=1665228581"
                alt="shiping"
              />
              <p>Secure Payment</p>
            </div>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_06_27T05_26_23_441Z_1_02b6d9fd-e849-46d8-ab32-157e64d1d976.png?v=1665228581"
                alt="shiping"
              />
              <p>Cash on Delivery</p>
            </div>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_06_27T05_27_26_524Z_1_60cbf54f-d800-43b7-a95c-034da41cb829.png?v=1665228581"
                alt="shiping"
              />
              <p>7 Days Return</p>
            </div>
            <div></div>
          </div>
        </div>
      </Box>
      
      
      {showAlert?
        <Container  sx={{fontSize:"1rem",gap:"3px", width:"fit-content",bgcolor:"red",color:"white",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"3%",left:"45%" ,borderRadius:"8px" }}>
          <MdError fontSize={"1.2rem"}/> <Text>
            
            Already in Cart!
            </Text>
        </Container>:""}
        {showSucess?
        <Container  sx={{fontSize:"1rem",gap:"3px", width:"fit-content",bgcolor:"green",color:"white",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"3%",left:"45%" ,borderRadius:"8px" }}>
          <AiFillCheckCircle fontSize={"1.2rem"}/> <Text>
            
            Added To Cart
            </Text>
        </Container>:""}

    </div>
  );
}

export default Discription;

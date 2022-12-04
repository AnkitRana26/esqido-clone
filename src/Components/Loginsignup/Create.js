import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { CircularProgress, Container, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { MdError } from "react-icons/md";


let initalForm ={
    email:"",
    pass:"",
    firstname:"",
    lastname:""
}


const Create = (props) => {
    const [showAlert,setAlert] = useState(false);
    const [showSucess,setSucess] = useState(false);
    const [cartLoading,setCartLoading] =useState(false);
    const [formData,setFormData] = useState(initalForm);
    let navigate = useNavigate();

    const [isTablet] = useMediaQuery("(max-width: 900px)") 



    let bool =JSON.parse(localStorage.getItem("loggedUser"));

    if(bool){
        navigate("/");
    }

    const handleSubmit = (e) => {
        setCartLoading(true);
        let users = JSON.parse(localStorage.getItem("users")) ||[];
        

        for(let i=0;i<users.length;i++){

            if(users[i].email==formData.email){
                
                setAlert(true);
                setTimeout(() => {
                    setCartLoading(false);
                    setAlert(false);
                }, 1500);
                return;
            }


        }


        users.push(formData);
        localStorage.setItem("users",JSON.stringify(users));
        setSucess(true);
        setTimeout(() => {
                setCartLoading(false);
                setSucess(false);
                navigate('/login')
        }, 1500);
    }
    const changeHandler =(e)=>{
        let {name,value} = e.target;
        setFormData({...formData,[name]:value});
        console.log(formData);
    }


    return (
        <Box margin={"5% auto"} w="45%" >
            <Text textAlign={"center"} fontSize="2.3rem">Create account</Text>
            <FormControl fullWidth sx={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"5px",rowGap:"10px"}} >
                <TextField
                id="outlined-password-input"
                label="First Name"
                sx={{borderRadius:"0"}}
                onChange={changeHandler}
                value={formData.firstname}
                name="firstname"
                required
                />
                <TextField
                id="outlined-password-input"
                label="Last Name"
                onChange={changeHandler}
                value={formData.lastname}
                name="lastname"
                required
                />
                <TextField
                id="outlined-password-input"
                label="Email"
                onChange={changeHandler}
                value={formData.email}
                name="email"
                required
                />
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                onChange={changeHandler}
                value={formData.pass}
                name="pass"
                required
                />
            
            
            </FormControl>
            <Box mt="2%" display="flex" gap="15px" alignItems="center">
            <Button onClick={handleSubmit} transition="all 0.2s linear;"  _hover={{backgroundColor:"grey"}}  bg="#1b2120" color="white" display="flex" gap="1%" height="70px" border="none" w="43%" p="0" h="50px" fontWeight="bold" fontSize="1.3rem"> <Text h="fit-content" > {cartLoading?<CircularProgress color="inherit" />:"Create"}</Text></Button>
            <Text width="100%">Returning customer? <Link to={"/login"} style={{textDecoration:"underline",color:"#ae867a"}} >Sign in</Link> </Text>
            
            </Box>
            {showAlert?
            <Container  sx={{fontSize:"1rem",gap:"3px", width:"fit-content",bgcolor:"red",color:"white",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"10%",left:"45%" ,borderRadius:"8px",zIndex:"50" }}>
              <MdError fontSize={"1.2rem"}/> <Text>
                
                Already Registered !
                </Text>
            </Container>:""}
            {showSucess?
            <Container  sx={{fontSize:"1rem",gap:"3px", width:"fit-content",bgcolor:"green",color:"white",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"10%",left:"45%" ,borderRadius:"8px",zIndex:"50" }}>
              <AiFillCheckCircle fontSize={"1.2rem"}/> <Text>
                
                Successfully Registered
                </Text>
            </Container>:""
        }

        </Box>
        
    
    )
}
export default Create;
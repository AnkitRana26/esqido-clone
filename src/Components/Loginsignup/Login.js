import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { CircularProgress, Container, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { AiFillCheckCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


let initalForm ={
    email:"",
    pass:"",
    
}


const Login = (props) => {
    const [showAlert,setAlert] = useState(false);
    const [showSucess,setSucess] = useState(false);
    const [cartLoading,setCartLoading] =useState(false);

    const [formData,setFormData] = useState(initalForm);
    let navigate = useNavigate()


    const [isTablet] = useMediaQuery("(max-width: 900px)") 

    let bool =JSON.parse(localStorage.getItem("loggedUser"));

    if(bool){
        navigate("/");
    }






    const handleSubmit = (e) => {
        setCartLoading(true);
        let users = JSON.parse(localStorage.getItem("users")) ||[];

        for(let i=0;i<users.length;i++){

            if(users[i].email==formData.email&&users[i].pass==formData.pass){
                
                localStorage.setItem("loggedUser",JSON.stringify(users[i]));
                setSucess(true);
                setTimeout(() => {
                    setCartLoading(false);
                    setSucess(false);
                    navigate("/");

                }, 1500);
                return;
            }


        }

       setAlert(true);
        setTimeout(() => {
            setCartLoading(false);
            setAlert(false);
        }, 1500);
        return;



    }
    const changeHandler =(e)=>{
        let {name,value} = e.target;
        setFormData({...formData,[name]:value});
        console.log(formData);
    }


    return (
        <Box margin={"5% auto"} w="33%" >
            <Text textAlign={"center"} fontSize="2.3rem">Login</Text>
            <FormControl fullWidth sx={{display:"grid",gap:"5px",rowGap:"10px"}} >
                
                
                <TextField
                id="outlined-password-input"
                label="Email"
                onChange={changeHandler}
                value={formData.email}
                name="email"
                />
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                onChange={changeHandler}
                value={formData.pass}
                name="pass"
                />
            
            
            </FormControl>
            <Box mt="2%" display="flex" gap="15px" alignItems="center">
            <Button onClick={handleSubmit} transition="all 0.2s linear;"  _hover={{backgroundColor:"grey"}}  bg="#1b2120" color="white" display="flex" gap="1%" height="70px" border="none" w="43%" p="0" h="50px" fontWeight="bold" fontSize="1.3rem"> <Text h="fit-content" > {cartLoading?<CircularProgress color="inherit" />:"Login"}</Text></Button>
            <Text width="100%">Don't Have an Account? <Link to={"/register"} style={{textDecoration:"underline",color:"#ae867a"}} >Sign Up</Link> </Text>
            {showAlert?
            <Container  sx={{fontSize:"1rem",gap:"3px", width:"fit-content",bgcolor:"red",color:"white",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"15%",left:"45%" ,borderRadius:"8px" }}>
              <MdError fontSize={"1.2rem"}/> <Text>
                
                Wrong Credendials !
                </Text>
            </Container>:""}
            {showSucess?
            <Container  sx={{fontSize:"1rem",gap:"3px", width:"fit-content",bgcolor:"green",color:"white",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:"15%",left:"45%" ,borderRadius:"8px" }}>
              <AiFillCheckCircle fontSize={"1.2rem"}/> <Text>
                
                Login Successfully
                </Text>
            </Container>:""
        }
            
            </Box>

        </Box>
    
    )
}
export default Login;
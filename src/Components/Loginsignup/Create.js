import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


let initalForm ={
    email:"",
    pass:"",
    firstname:"",
    lastname:""
}


const Create = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const [formData,setFormData] = useState(initalForm);


    const [isTablet] = useMediaQuery("(max-width: 900px)") 

    const handleSubmit = (e) => {
        let users = JSON.parse(localStorage.getItem("users")) ||[];
        users.push(formData);
        localStorage.setItem("users",JSON.stringify(users));
    }
    const changeHandler =(e)=>{
        let {name,value} = e.target;
        setFormData({...formData,[name]:value});
        console.log(formData);
    }


    return (
        <Box margin={"auto"} w="45%" mt={"4%"}>
            <Text textAlign={"center"} fontSize="1.8rem">Create account</Text>
            <FormControl fullWidth sx={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"5px",rowGap:"10px"}} >
                <TextField
                id="outlined-password-input"
                label="First Name"
                sx={{borderRadius:"0"}}
                onChange={changeHandler}
                value={formData.firstname}
                name="firstname"
                />
                <TextField
                id="outlined-password-input"
                label="Last Name"
                onChange={changeHandler}
                value={formData.lastname}
                name="lastname"
                />
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
            <Button onClick={handleSubmit} transition="all 0.2s linear;"  _hover={{backgroundColor:"grey"}} bg="#1b2120" color="white" display="flex" gap="1%" height="70px" border="none" w="40%" p="0" h="40px" fontWeight="bold" fontSize={isTablet?"3vw":"1.7vw"}> <Text h="fit-content" >Create</Text></Button>
            <Text width="100%">Returning customer? <span style={{textDecoration:"underline",color:"#ae867a"}} >Sign in</span> </Text>
            
            </Box>

        </Box>
    
    )
}
export default Create;
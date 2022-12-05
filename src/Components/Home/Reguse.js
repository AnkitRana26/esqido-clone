import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Nav.css'

function Reguse(){

    let navigate =  useNavigate() 
    let [name,setName]=React.useState("");    

    useEffect(()=>{
        let regUser = JSON.parse(localStorage.getItem("loggedUser")) || false;
        if(regUser != false)
        setName(name=regUser.firstname.charAt(0));

    })
        const logout =()=>{
            localStorage.removeItem("loggedUser");
            // navigate("/");
        }

    return (
        <div id="name">
        {name}
        <div className="drop">
            <h3 onClick={logout}>Logout</h3>
        </div>
        
        </div>
    )
}

export default Reguse;
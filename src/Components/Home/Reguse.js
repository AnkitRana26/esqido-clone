import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Nav.css";

function Reguse() {
  let navigate = useNavigate();
  let [name, setName] = React.useState("");
  let regUser = JSON.parse(localStorage.getItem("loggedUser")) || false;

  useEffect(() => {
    let regUser = JSON.parse(localStorage.getItem("loggedUser")) || false;
    if (regUser != false) setName((name = regUser.firstname.charAt(0)));
  });
  const logout = () => {
    localStorage.removeItem("loggedUser");
    // navigate("/");
  };

  return (
    <div id="name">
      {name}

      <div className="drop">
        <h3>{regUser.firstname}</h3>
        <Link
          style={{ fontSize: "18px", textDecoration: "none", color: "black" }}
          to={"/order"}
        >
          Orders
        </Link>
        <h3 onClick={logout}>Logout</h3>
      </div>
    </div>
  );
}

export default Reguse;

import { Box, Button, Heading, Image,Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LinearWithValueLabel from "./DeliveryStatus";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../MiniCart/MiniCart.css"

const OrderPage = () => {
  let [data, setData] = useState([]);
  let [details, setDetails] = useState({});
  let [orderId, setOrderId] = useState("");
  let [loggedUser, setLoggedUser] = useState({});
  let date = new Date("October 13, 2014 11:13:00");
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const totalPrice = () => {
    return data.reduce((acc, ele) => {
      return acc + ele.price * ele.qty;
    }, 0);
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("order")) || []);
    setDetails(JSON.parse(localStorage.getItem("address")) || {});
    setOrderId(localStorage.getItem("orderId"));
    setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")) || {});
  }, []);

  return (
    <Box width={"80%"} m="5% auto">
      <Heading
      fontSize={"1.8rem"}
        mb="0"
        bgColor={"#ae867a"}
        p="1%"
        textAlign={"center"}
        color={"white"}
      >
        Orders Details
      </Heading>
      <Box  p={"1% 25px"} mt={"0"} border={"1px solid grey"} height="1000px">
        <Box p={"0% 8px"}  display={"flex"} justifyContent={"space-between"}>
          <Box mt={"1%"}>
            <Text m={"0"} fontSize={"1.3rem"} fontWeight="500">
              {loggedUser.firstname + " " + loggedUser.lastname}
            </Text>
            <Text m={"0%"} fontSize={"1rem"}>
              OrderId:-{orderId}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"1.3rem"} fontWeight="500">
              ${totalPrice()}
            </Text>
          </Box>
          <Box>
            <Text>Expected Delivery Thursday , 8 Dec 2022</Text>
            <LinearWithValueLabel />
          </Box>
        </Box>
        <Box mt={"2%"}>
          <Accordion
            sx={{border:"2px solid pink"}}
            expanded="true"
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ borderBottom:"1px solid pink",paddingBottom:"5px",width: "100%",margin:"auto",textAlign:"center",fontSize:"1.3rem", fontWeight:"medium",flexShrink: 0 }}>
                Order Items
              </Typography>
              
            </AccordionSummary>
            <AccordionDetails className="cartDiv" sx={{height:"300px",overflow:"auto"}}>
            {
                data.map(ele=>{
                    return <Box  key={ele.id} p="2%"   display="grid" gridTemplateColumns="25% 75%"   gap="1%" borderBottom="1px solid rgba(0,0,0,.15)" >
                            <Image h="100px" w="100px" src={ele.img1} />
                            <Box p="1%" w="100%" display="grid" gridTemplateColumns="62% 38%" alignItems="center"  justifyContent="space-between" >
                                  <Box h="fit-content" textAlign="left" >
                                      <Text p="0" m="0" fontSize="1rem" fontWeight="600" color="black" noOfLines={1}>{ele.title}</Text>
                              
                                      
                                  </Box>
                                  <Box display="flex" alignItems="center"  justifyContent="space-between"  >
                                        <Box>
                                            {ele.qty}
                                        </Box>
                                        <Box fontSize="0.9rem"  w="50%"  display="flex" alignItems="center" justifyContent="space-around">
                                          <Text fontWeight={"bold"}>${(ele.price*ele.qty).toFixed(0)}</Text>
                                          
                                        </Box>
                                  </Box>
                            </Box>
                    </Box>
                })
            }
            </AccordionDetails>
          </Accordion>
          <Accordion
          sx={{border:"2px solid pink"}}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{borderBottom:"1px solid pink",paddingBottom:"5px", width: "100%",margin:"auto",textAlign:"center",fontSize:"1.3rem", fontWeight:"medium",flexShrink: 0 }}>
                Payment Details
              </Typography>
              
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                               
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                {loggedUser.firstname+" "+loggedUser.lastname}
                            </TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Address
                            </TableCell>
                            <TableCell>
                                {`${details.city} ${details.state}, ${details.country}, ${details.pincode}`}
                            </TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Total Amount
                            </TableCell>
                            <TableCell>
                                ${totalPrice()}
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Expected Delivery Date
                            </TableCell>
                            <TableCell>
                               Thursday ,8 Dec 2022
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Mobile Number
                            </TableCell>
                            <TableCell>
                               {details.phone}
                            </TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box display={"flex"} justifyContent="center" gap={"2%"}>

        <Button width={"20%"} marginTop="1%" fontSize={"1.3rem"} padding={"15px"} backgroundColor="#ff5a5a" color={"white"} borderRadius="5px" border="none">Cancel Order</Button>
        <Button width={"20%"} marginTop="1%" fontSize={"1.3rem"} padding={"20px"} backgroundColor="teal" color={"white"} borderRadius="5px" border="none">Change Address</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPage;

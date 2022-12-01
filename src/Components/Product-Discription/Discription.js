import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Select } from "@chakra-ui/react";
import { ColorComponent } from "./colorComponent/ColorComponent";
import {BiGift} from 'react-icons/bi';
import Ratings from "./rating/Ratings";
import "./Discription.css";

function Discription() {
  let data = {
    title: "Reusable Makeup Rounds (5 rounds)",
    rating: 4,
    totalReviews: 21,
  };
  return (
    <div id="discription-box">
      <h1>{data.title}</h1>
      <Box>
        <Box marginTop={"-20px"} display="flex" alignItems="center">
          {/* <StarIcon color={'#C2A284'} />
          <StarIcon color={'#C2A284'}/>
          <StarIcon color={'#C2A284'}/>
          <StarIcon color={'#C2A284'}/> */}
          <Ratings data={4.5}/>
          <div style={{ marginLeft: "8px",fontWeight:'600',display:"flex" , justifyContent:"space-between",width:'100%' }}><p>500+ Reviews</p><p style={{display:"flex",alignItems:"center"}}><BiGift color="#C2A284"/>&nbsp; 270 Points</p></div>
        </Box>
        <h2 className="price">
          <span className="originalPrice">₹{(3000 * 110) / 100}</span>
          &nbsp;&nbsp;<span className="currentPrice">₹{3000}</span>&nbsp;
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
          >
            ADD TO CART
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
    </div>
  );
}

export default Discription;

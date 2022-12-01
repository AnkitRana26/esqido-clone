import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./AccordianDiscription.css";

export const AcordianDiscription = () => {
  return (
    <div className="accordian">
      <Accordion   allowToggle defaultIndex={[0]}>
        <AccordionItem  >
          <h2 style={{marginBottom:"23px"}} >
            <AccordionButton
            fontSize={'1rem'}
              h={"50px"}
              border={"none"}
             
              boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              borderRadius={"5px 5px 0 0"}
              // borderTop={"1px dashed grey"}
              backgroundColor={"white"}
            >
              <Box flex="1" textAlign="left">
                DESCRIPTION
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel 
            // border="1px solid grey"
            // boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
            // borderRadius={"0 0 5px 5px"}
           pb={4} padding={'0% 1% 1% 1%'}>
            Perfect set for all lipstick lovers, this one is truly a must-have!
            Introducing a customizable mini lipstick set that has classic
            bestselling shades from SUGAR's Smudge Me Not Liquid Lipstick range.
            The 'Power up your Pout' set has mini lipsticks packed with rich
            pigments, are long-wear and swipe on beautifully smooth. These matte
            hues take your look from day to night in just one swipe. Go for
            daring reds, feisty pinks or subtle nudes, these mini lipsticks have
            proven to make your lips look plumper and fuller.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2 style={{marginBottom:"23px"}}>
            <AccordionButton
              
              fontSize={'1rem'}
              h={"50px"}
              marginTop={"-20px"}
              border={"0px"}
              boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              borderRadius={"5px 5px 0 0"}
              backgroundColor={"white"}
            >
              <Box flex="1" textAlign="left">
                HOW TO USE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
          // boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          pb={4} padding={'0% 1% 1% 1%'}>
            Apply the liquid lipstick in the center of your upper lip and follow
            the contours of your lips Glide the lipstick across your lower lip
            Let it dry and you are ready to slay a smudge-proof pout for upto 12
            hrs!
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2 style={{marginBottom:"23px"}}>
            <AccordionButton
            fontSize={'1rem'}
              h={"50px"}
              marginTop={"-20px"}
              border={"0px"}
              boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              borderRadius={"5px 5px 0 0"}
              backgroundColor={"white"}
            >
              <Box flex="1" textAlign="left">
                INGREDIENTS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} padding={'0% 1% 1% 1%'}>
            100% Vegan and Cruelty-free Smudge Me Not Liquid Lipstick:
            Isododecane, Dimethicone, Isododecane, Trimethylsiloxysilicate,
            Cyclopentasiloxane, Trimethylsiloxysilicate, Disteardimonium
            Hectorite, Propyl Paraben, Propylene Carbonate, Vitamin - E,
            Fragrance, Approved colours.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem p={"0"} >
          <h2 style={{marginBottom:"23px"}}>
            <AccordionButton
            fontSize={'1rem'}
              h={"50px"}
              marginTop={"-20px"}
              border={"0px"}
              boxShadow= "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              borderRadius={"5px 5px 0 0"}
              
              backgroundColor={"white"}
            >
              <Box flex="1" textAlign="left">
                COMMONLY ASKED QUESTIONS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel  pb={4} padding={'0% 1% 1% 1%'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

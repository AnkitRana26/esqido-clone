import { Box, Image } from "@chakra-ui/react";
import './ProductImage.css'

function ProductImage(prop) {
  
  return (
    <div id="product-image">
      <Box boxSize="lg" border={'2px'} borderColor={'red'}>
        <Image  display="block" width="90%" src={prop.data} alt="esquido Image" />
      </Box>
    </div>
  );
}

export default ProductImage;

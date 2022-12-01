import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Ratings(props) {
  const [value, setValue] = React.useState(props.data);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend"></Typography>
      <Rating 
      
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <Typography component="legend"></Typography>
      <Rating name="read-only" value={value} readOnly precision={0.5}/>
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}




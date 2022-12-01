import { Rating } from '@mui/material'
import { Button } from '@chakra-ui/react'
import React from 'react'
import './ReviewForm.css'

const ReviewForm = () => {
  return (
    <div>
        <h2>Write a Review</h2>
        <form>
            <Rating/>
            <h4>Review</h4>
            <textarea  className='reviewInput'  placeholder='Write your comment here'/>
            <Button h={'40px'} border='none' bg={'green'} color='white' borderRadius={'17px'} marginTop='20px' size={"xs"}>Submit Review</Button>
        </form>
    </div>
  )
}

export default ReviewForm
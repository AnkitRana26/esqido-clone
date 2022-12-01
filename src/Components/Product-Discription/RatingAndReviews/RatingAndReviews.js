import React from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { Progress } from '@chakra-ui/react'

export const RatingAndReviews = () => {
  return (
    <div>
        <div>
            <div>
                {/* <span>5 <StarIcon/></span> */}
                <Progress value={20} size='lg' colorScheme='pink' />
            </div>
        </div>
    </div>
  )
}

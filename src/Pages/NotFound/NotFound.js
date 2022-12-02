import { Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const  NotFound= () => {
    let navigate = useNavigate()
  return (
    <Image cursor={"pointer"} onClick={()=>navigate('/')} width={"90%"} m="5% auto" display={"block"}  src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?w=996&t=st=1669968919~exp=1669969519~hmac=3fcf1b0dc6f3f90a4e9518d141f5f30039e39598e1bd84b68a819083e77c42b3' />
  )
}

export default NotFound
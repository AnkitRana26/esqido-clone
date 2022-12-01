import React, { useState } from 'react'
import "./ColorComponent.css"

export const ColorComponent = () => {
const [color,setColor] = useState(0);
  return (
    <div className='colorBox'>
        <div>
        <div onClick={()=>{setColor(1)}} className={color === 1 ?"colorSelected":""}><div className='colors black'></div></div>
        <p>Available</p>
        </div>
        <div>
        <div onClick={()=>{setColor(2)}} className={color === 2 ?"colorSelected":""}><div className='colors red'></div></div>
        <p>Available</p>
        </div>

        <div>
        <div onClick={()=>{setColor(3)}} className={color === 3 ?"colorSelected":""}><div className='colors blue'></div></div>
        <p>Available</p>
        </div>
        <div>
        <div onClick={()=>{setColor(4)}} className={color === 4 ?"colorSelected":""}><div className='colors green'></div></div>
        <p>Available</p>
        </div>
        <div>
        <div onClick={()=>{setColor(5)}} className={color === 5 ?"colorSelected":""}><div className='colors yellow'></div></div>
        <p>Available</p>
        </div>
    </div>
  )
}

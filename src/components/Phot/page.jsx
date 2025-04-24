import React from 'react'
import Image from 'next/image'
import { text } from 'stream/consumers';
import { motion } from "motion/react";


const text1 = "Super Hoodies";
const text2 = "The Art Of Streetwear.";


export default function Phot() {
  return (
    <div className='bg-[#252525]  mt-[40px] w-full h-[1164px]'>



<h1 className=' absolute font-PP Neue Montreal ml-[600px] text-[32px] text-[#626262] mt-[50px]'>
{text1} 
    </h1>
    <h1 className='absolute text-[42px] text-white ml-[500px] mt-[100px]'>
       {text2} 
    </h1>






<div>


<div>

<img 
className=' absolute ml-[400px] mt-[500px] w-[70px] h-[70px]'
src="/phot/shop.svg" 
alt="shop" />


    <img 
className=' absolute  ml-[300px] mt-[300px]'
src="/phot/pro2.png" alt="prodact2" />
</div>

<img 
className=' absolute w-[499.06px] h-[640.03px] ml-[300px] mt-[300px] '
src="/phot/pro3.png" alt="prodact3" />



<img 
className='absolute w-[616px] h-[790px] ml-[600px] mt-[300px]'
src="/phot/pro1.png" alt="prodact1" />





    

    </div>
    </div>
  )
}
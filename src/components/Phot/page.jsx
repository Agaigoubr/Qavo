import React from 'react'
import Image from 'next/image'
import { text } from 'stream/consumers';

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



<img 
className=' '
src="/phot/pro1.png" alt="prodact1" />




    

    </div>
  )
}

import { div, h1 } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

export default function Homem() {

const text = "Exprimez Votre Style avec Audace | Hoodies, T-Shirts & Parfums";
const start = "Start Shopping"

return (
<div>


<button className='absolute   bg-white w-[74px] h-[74px] rounded-[40px] ml-[276px] mt-[580px]'>
    
    <img 
    className='ml-5'
    src="/home/mobile/iconc.svg" alt="start" />

</button>

<button className='absolute text-[#2E2E2E] text-[17px] bg-white w-[253px] h-[65px] rounded-[40px] ml-[20px] mt-[580px] '> 
{start}
</button>









<h1 className='absolute text-white text-[27px] mt-[450px] ml-[20px]  '>
    {text}
</h1>



<button

className='absolute w-[51.56px] h-[51.56px] bg-white rounded-[40px] ml-[30px] mt-[60px]'>

    <img 
    className='ml-3'
    src="/home/mobile/iconb.svg" alt="yasar" />

</button>


<button

className='absolute w-[51.56px] h-[51.56px] bg-white rounded-[40px] ml-[90px] mt-[60px]'>


<img 
    className='ml-4'
    src="/home/mobile/icona.svg" alt="yamin" />

</button>


<img
className='absolute ml-[270px] mt-[70px]'
src="/home/mobile/logo.svg" alt="logo" />



<img
src="/home/mobile/back.jpg"
width={'410px'}
height={"782px"}
className='rounded-[40px] mt-[20px] p-2'
/>



</div>
  
  )
}

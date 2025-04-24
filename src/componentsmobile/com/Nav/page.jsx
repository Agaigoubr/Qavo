import React from 'react'
import Image from 'next/image'

export default function Nav() {
  return (



    <div className='ml-[280px] mt-[10px] flex items-center gap-[10px]'>
      <Image
        src="/navber/shop.svg"
        alt="shop"
        width={25}  
        height={25} 
        className='object-contain mt-3'
      />
      <img
        src="/navber/meun.svg"
        alt="menu"
    
        width={"25px"}  
        height={"25px"} 
        className='object-contain mt-3'
      />



      



    </div>
  )
}
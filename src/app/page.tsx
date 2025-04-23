import React from 'react'
import Home from "@/app/home/page";
//import { div, main } from 'motion/react-client';
import Prodact from "@/components/Prodact/page";
import Viduo from "@/components/Viduo/page";
import Phot from "@/components/Phot/page";


export default function test() {
  return (
    
<main>
  <Home />

  <h1 className="w-[222px] h-[36px] ml-[600px] font-medium text-[20px] leading-[36px] text-black">
  Offers Right Now

  </h1>


  <Prodact />
<Viduo />

<Phot />
</main>


  )
}

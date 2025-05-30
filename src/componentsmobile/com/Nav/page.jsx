import React from 'react'

export default function page() {
  return (
    <div className="flex items-center gap-3  mt-[10px] ml-[5px]">
  <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 bg-[#2f2f2f] text-[#dcdcdc] rounded-full px-[15px] py-2">
    <span className="font-medium text-sm">Hoodies</span>
  </div>
  <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-transparent text-[#2e2e2e] rounded-full px-[15px] py-2 border-[#dddddd]">
    <span className="font-medium text-sm">T-Shirts</span>
  </div>
  <div className="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-transparent text-[#2e2e2e] rounded-full px-[15px] py-2 border-[#dddddd]">
    <span className="font-medium text-sm">Parfums</span>
  </div>
  <div className="flex gap-3 ml-6">
    <img className="w-[26px] h-[26px]" alt="shop" src="/shop.svg" />
    <img className="w-[26px] h-[26px]" alt="muane" src="/meun.svg" />
  </div>
</div>

  )
}

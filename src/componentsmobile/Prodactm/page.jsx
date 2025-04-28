import React from 'react'
import Image from 'next/image'
export default function MobileProducts() {
  return (
    <div className="relative w-full bg-neutral-100" style={{ height: '2309px', top: '897px' }}>
      {/* Offers Right Now title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[919px] w-[185px] h-[30px]">
        <p className="font-['PP_Neue_Montreal'] font-medium text-[25px] leading-[30px] text-black text-center">
          Offers Right Now
        </p>
      </div>

      {/* Product 1 */}
      <div className="absolute left-[10px] top-[978px] w-[410px] h-[524px]">
        <img 
          className="w-full h-full rounded-[40px] object-cover" 
          alt="Product 1" 
          src="/hoodies/prodact/ph1.png" 
        />
        
        {/* Favorite button */}
        <div className="absolute top-[29px] right-[29px] w-[55px] h-[55px]">
          <button className="w-full h-full rounded-full bg-white border border-[#dcdcdc] flex items-center justify-center">
            <img className="w-9 h-[35px]" alt="Favorite" src="/prodact/icona.svg" />
          </button>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute bottom-[25px] left-[25px]">
          <button className="w-[74px] h-[74px] bg-white rounded-[40px] flex items-center justify-center transform rotate-[135deg]">
            <img className="w-[42.43px] h-[42.43px]" alt="Previous" src="/prodact/icond.svg" />
          </button>
          <button className="w-[74px] h-[74px] bg-white rounded-[40px] flex items-center justify-center left-[100px] transform -rotate-45 absolute">
            <img className="w-[42.43px] h-[42.43px]" alt="Next" src="/prodact/iconb.svg" />
          </button>
        </div>
        
        {/* Product info */}
        <div className="absolute left-[25px] top-[1548px]">
          <div className="flex items-center gap-2">
            <span className="font-['PP_Neue_Montreal'] font-medium text-black text-[32px] leading-[38px]">
              134.00 Dhs
            </span>
            <div className="relative">
              <span className="font-['PP_Neue_Montreal'] font-medium text-[#a2a2a2] text-[22px] leading-[26px]">
                199.00 Dhs
              </span>
              <div className="absolute top-3.5 w-full h-[1px] bg-black"></div>
            </div>
          </div>
          <div className="absolute left-[336px] top-[1627px] font-['PP_Neue_Montreal'] font-medium text-black text-[32px] leading-[38px]">
            -43%
          </div>
        </div>
        
        <p className="absolute left-[25px] top-[1601px] w-[304px] h-[64px] font-['PP_Neue_Montreal'] font-medium text-[#878787] text-[27px] leading-[32px]">
          Hoodies Blockout Unique Style & Edition
        </p>
        
        {/* Add to cart button */}
        <div className="absolute left-[350px] top-[1535px] w-[70px] h-[69px]">
          <button className="w-full h-full rounded-full bg-[rgba(255,255,255,0.26)] backdrop-blur-[17px] flex items-center justify-center">
            <div className="w-[55px] h-[56px] bg-white rounded-full border-[0.5px] border-[#dcdcdc] flex items-center justify-center">
              <img className="w-9 h-9" alt="Cart" src="/prodact/shop.svg" />
            </div>
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="absolute left-[10px] top-[1711px] w-[409px] h-[524px]">
        <img 
          className="w-full h-full rounded-[40px] object-cover" 
          alt="Product 2" 
          src="/hoodies/prodact/ph2.png" 
        />
        
        {/* Favorite button */}
        <div className="absolute top-[29px] right-[29px] w-[55px] h-[55px]">
          <button className="w-full h-full rounded-full bg-white border border-[#dcdcdc] flex items-center justify-center">
            <img className="w-9 h-[35px]" alt="Favorite" src="/prodact/icona.svg" />
          </button>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute bottom-[25px] left-[25px]">
          <button className="w-[74px] h-[74px] bg-white rounded-[40px] flex items-center justify-center transform rotate-[135deg]">
            <img className="w-[42.43px] h-[42.43px]" alt="Previous" src="/prodact/icond.svg" />
          </button>
          <button className="w-[74px] h-[74px] bg-white rounded-[40px] flex items-center justify-center left-[100px] transform -rotate-45 absolute">
            <img className="w-[42.43px] h-[42.43px]" alt="Next" src="/prodact/iconb.svg" />
          </button>
        </div>
        
        {/* Product info */}
        <div className="absolute left-[25px] top-[2281px]">
          <div className="flex items-center gap-2">
            <span className="font-['PP_Neue_Montreal'] font-medium text-black text-[32px] leading-[38px]">
              134.00 Dhs
            </span>
            <div className="relative">
              <span className="font-['PP_Neue_Montreal'] font-medium text-[#a2a2a2] text-[22px] leading-[26px]">
                199.00 Dhs
              </span>
              <div className="absolute top-3.5 w-full h-[1px] bg-black"></div>
            </div>
          </div>
          <div className="absolute left-[336px] top-[2360px] font-['PP_Neue_Montreal'] font-medium text-black text-[32px] leading-[38px]">
            -43%
          </div>
        </div>
        
        <p className="absolute left-[25px] top-[2334px] w-[304px] h-[64px] font-['PP_Neue_Montreal'] font-medium text-[#878787] text-[27px] leading-[32px]">
          Hoodies Blockout Unique Style & Edition
        </p>
        
        {/* Add to cart button */}
        <div className="absolute left-[350px] top-[2268px] w-[70px] h-[69px]">
          <button className="w-full h-full rounded-full bg-[rgba(255,255,255,0.26)] backdrop-blur-[17px] flex items-center justify-center">
            <div className="w-[55px] h-[56px] bg-white rounded-full border-[0.5px] border-[#dcdcdc] flex items-center justify-center">
              <img className="w-9 h-9" alt="Cart" src="/prodact/shop.svg" />
            </div>
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="absolute left-[10px] top-[2449px] w-[409px] h-[524px]">
        <img 
          className="w-full h-full rounded-[40px] object-cover" 
          alt="Product 3" 
          src="/hoodies/prodact/ph3.png" 
        />
        
        {/* Favorite button */}
        <div className="absolute top-[29px] right-[29px] w-[55px] h-[55px]">
          <button className="w-full h-full rounded-full bg-white border border-[#dcdcdc] flex items-center justify-center">
            <img className="w-9 h-[35px]" alt="Favorite" src="/prodact/icona.svg" />
          </button>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute bottom-[25px] left-[25px]">
          <button className="w-[74px] h-[74px] bg-white rounded-[40px] flex items-center justify-center transform rotate-[135deg]">
            <img className="w-[42.43px] h-[42.43px]" alt="Previous" src="/prodact/icond.svg" />
          </button>
          <button className="w-[74px] h-[74px] bg-white rounded-[40px] flex items-center justify-center left-[100px] transform -rotate-45 absolute">
            <img className="w-[42.43px] h-[42.43px]" alt="Next" src="/frame-3.svg" />
          </button>
        </div>
        
        {/* Product info */}
        <div className="absolute left-[25px] top-[3006px]">
          <div className="flex items-center gap-2">
            <span className="font-['PP_Neue_Montreal'] font-medium text-black text-[32px] leading-[38px]">
              134.00 Dhs
            </span>
            <div className="relative">
              <span className="font-['PP_Neue_Montreal'] font-medium text-[#a2a2a2] text-[22px] leading-[26px]">
                199.00 Dhs
              </span>
              <div className="absolute top-3.5 w-full h-[1px] bg-black"></div>
            </div>
          </div>
          <div className="absolute left-[336px] top-[3075px] font-['PP_Neue_Montreal'] font-medium text-black text-[32px] leading-[38px]">
            -43%
          </div>
        </div>
        
        <p className="absolute left-[25px] top-[3075px] w-[304px] h-[64px] font-['PP_Neue_Montreal'] font-medium text-[#878787] text-[27px] leading-[32px]">
          T-Shirt Blockout Unique Style & Edition
        </p>
        
        {/* Add to cart button */}
        <div className="absolute left-[350px] top-[3006px] w-[70px] h-[69px]">
          <button className="w-full h-full rounded-full bg-[rgba(255,255,255,0.26)] backdrop-blur-[17px] flex items-center justify-center">
            <div className="w-[55px] h-[56px] bg-white rounded-full border-[0.5px] border-[#dcdcdc] flex items-center justify-center">
              <img className="w-9 h-9" alt="Cart" src="/prodact/shop.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
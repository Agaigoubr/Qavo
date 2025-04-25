import { div } from 'framer-motion/client'
import React from 'react'

export default function Text() {
const text1 = "text1";
const text2 = "text2";
const text3 = "text3";
const image1 = "img "
  return (





    <div className="relative container mx-auto px-4 py-20">
      {/* About Us. */}
      <h2 className=" font-medium text-3xl text-[#BABABA] mb-4">
        {text1}
      </h2>

      {/* We Are Qavo Brand. */}
      <h1 className=" font-normal text-5xl text-center text-[#BABABA] mb-8">
{text2}
      </h1>

      {/* Lorem ipsum paragraph */}
      <p className=" text-5xl leading-[59px] text-black max-w-4xl mx-auto">
{text3}      </p>
    </div>
  );
};



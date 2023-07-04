import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="h-[50px] text-[14px] flex items-center justify-between">
      <div>2023 Soft Dazzle. All rights reserved.</div>
      <div>
        <div className="flex items-center gap-[10px]">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className="opacity-[0.6] cursor-pointer"
            alt="Soft Dazzle"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className="opacity-[0.6] cursor-pointer"
            alt="Soft Dazzle"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className="opacity-[0.6] cursor-pointer"
            alt="Soft Dazzle"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className="opacity-[0.6] cursor-pointer"
            alt="Soft Dazzle"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

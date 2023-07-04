import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="my-[20px]">Choose a gallery</h1>
      <div className="flex gap-[50px]">
        <Link
          href="/portfolio/illustrations"
          className={`${styles.item} 
            border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative `}
        >
          <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold text-white hover:text-[#53c28b]">
            Illustrations
          </span>
        </Link>
        <Link
          href="/portfolio/website"
          className={`${styles.item} 
            border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative `}
        >
          <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold text-white hover:text-[#53c28b]">
            Websites
          </span>
        </Link>
        <Link
          href="/portfolio/application"
          className={`${styles.item} 
            border-[5px] border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative `}
        >
          <span className="absolute right-[10px] bottom-[10px] text-[40px] font-bold text-white hover:text-[#53c28b]">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

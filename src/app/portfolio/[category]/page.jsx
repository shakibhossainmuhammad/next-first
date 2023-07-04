import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

const Category = ({ params }) => {
  return (
    <div className="">
      <h1 className="text-[#53c28b]">{params.category}</h1>
      <div className={`${styles.item} flex gap-[50px] mt-[50px] mb-[100px]`}>
        <div className="flex-1 flex flex-col gap-[20px] justify-center">
          <h1 className="text-[50px] font-bold">Test</h1>
          <p className="text-[20px]">Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className="flex-1 h-[500px] relative">
          <Image
            className="object-cover"
            fill={true}
            src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={`${styles.item} flex gap-[50px] mt-[50px] mb-[100px]`}>
        <div className="flex-1 flex flex-col gap-[20px] justify-center">
          <h1 className="">Test</h1>
          <p className="">Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className="flex-1 h-[500px] relative">
          <Image
            className="object-cover"
            fill={true}
            src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={`${styles.item} flex gap-[50px] mt-[50px] mb-[100px]`}>
        <div className="flex-1 flex flex-col gap-[20px] justify-center">
          <h1 className="">Test</h1>
          <p className="">Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className="flex-1 h-[500px] relative">
          <Image
            className="object-cover"
            fill={true}
            src="https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;

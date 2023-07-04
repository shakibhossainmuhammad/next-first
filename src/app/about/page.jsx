import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative">
        <Image
          src="https://images.pexels.com/photos/5583978/pexels-photo-5583978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className="object-cover grayscale"
        />
        <div className="absolute bottom-[20px] left-[20px] bg-[#53c28b] p-[5px] text-white">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
          <h1 className="">Who Are We?</h1>
          <p className="text-[18px] font-[300] text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            optio unde perferendis suscipit illum eligendi eveniet veritatis
            exercitationem hic? Molestias, esse aliquam quas enim consectetur
            animi vitae, pariatur necessitatibus, tempore iure deserunt.
            <br />
            <br />
            Cupiditate atque voluptatem nesciunt quam incidunt saepe.
            Consequuntur odio optio accusantium tempora aliquid! Consequatur
            repudiandae eos numquam praesentium.
          </p>
        </div>
        <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
          <h1 className="">What We Do?</h1>
          <p className="text-[18px] font-[300] text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            <br />
            <br />
            - Creative Design
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />- Fast and Handy Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

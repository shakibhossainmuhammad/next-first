import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-[60px] mb-[100px] text-center">
        Let's Keep in Touch
      </h1>
      <div className="flex items-center gap-[100px]">
        <div className="flex-1 h-[500px] relative">
          <Image
            src="/contact.png"
            fill={true}
            className="object-contain animate-[move_3s_infinite_ease_alternate]"
          />
        </div>
        <form className="flex-1 flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="name"
            className="p-[20px] bg-transparent  outline-none text-[#bbb] border-[3px] border-[#bbb] font-bold text-[20px]"
          />
          <input
            type="text"
            placeholder="email"
            className="p-[20px] bg-transparent outline-none text-[#bbb] border-[3px] border-[#bbb] font-bold text-[20px]"
          />
          <textarea
            className="p-[20px] bg-transparent  outline-none text-[#bbb] border-[3px] border-[#bbb] font-bold text-[20px]"
            placeholder="message"
            name=""
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

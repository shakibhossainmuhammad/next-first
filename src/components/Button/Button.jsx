import Link from 'next/link';
import React from 'react';

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className="p-5 cursor-pointer bg-[#53c28b] rounded-[5px] text-white w-max">
        {text}
      </button>
    </Link>
  );
};

export default Button;

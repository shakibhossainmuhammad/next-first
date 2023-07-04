import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <div className="">
      <Link
        className="flex items-center gap-[50px] mb-[50px]"
        href="/blog/testId"
      >
        <div>
          <Image
            src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className=""
          />
        </div>
        <div className="">
          <h1 className="">Test</h1>
          <p className="">Desc</p>
        </div>
      </Link>
      <Link
        className="flex items-center gap-[50px] mb-[50px]"
        href="/blog/testId"
      >
        <div>
          <Image
            src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className=""
          />
        </div>
        <div className="">
          <h1 className="">Test</h1>
          <p className="">Desc</p>
        </div>
      </Link>
      <Link
        href="/blog/testId"
        className="flex items-center gap-[50px] mb-[50px]"
      >
        <div>
          <Image
            src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className=""
          />
        </div>
        <div className="">
          <h1 className="">Test</h1>
          <p className="">Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

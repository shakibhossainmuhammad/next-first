import Button from '@/components/Button/Button';
import Image from 'next/image';
import Hero from 'public/hero.png';

export default function Home() {
  return (
    <div className="flex items-center gap-[100px] ">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-[70px] font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-t from-[#bbb] to-[#194c33]">
          Better design for your digital products
        </h1>
        <p className="text-2xl font-[300]">
          Tuning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url="/portfolio" text="See Our Work" />
      </div>
      <div>
        <Image src={Hero} alt="" className="w-full h-[500px] object-cover" />
      </div>
    </div>
  );
}

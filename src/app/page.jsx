import Image from 'next/image';
import Hero from 'public/hero.png';

export default function Home() {
  return (
    <div className="flex items-center gap-[100px] ">
      <div className="flex-1">
        <h1>Better design for your digital products</h1>
        <p>
          Tuning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <button>See Our Work</button>
      </div>
      <div>
        <Image src={Hero} alt="" className="" />
      </div>
    </div>
  );
}

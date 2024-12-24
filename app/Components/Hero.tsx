import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <video
        className="h-full w-full"
        autoPlay
        loop
        muted
        playsInline
        src="/hero.mp4"
      ></video>
      <div className="text-white flex flex-col w-1/2 absolute left-20 top-44 ">
        <div className="flex gap-2 items-center">
          <h4 className="text-6xl font-bold">Hi,</h4>

          <Image height={52} width={52} src="/hi.png" alt="image" />
        </div>
        <h3 className="text-7xl font-bold pb-3">Lokesh Kumar</h3>
        <p className="w-2/3 text-xs font-semibold opacity-55 pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel!
          Laudantium aliquam sed non impedit ullam beatae suscipit quaerat
          fugiat consequatur nihil dolorem, nulla eius pariatur cum itaque qui
          fugit!
        </p>
        <Link
          href="/"
          className="w-52 py-2 border border-[#ffffff2f] hover:bg-[#ffffff20] flex justify-center items-center rounded-full ease-in-out duration-200 font-semibold"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Hero;

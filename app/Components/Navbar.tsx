import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute w-full px-8 py-4 text-sm text-white flex justify-between items-center ">
      <div className="flex gap-7 justify-center items-center ">
        <h3 className="font-bold text-xl pr-20">Huly</h3>

        <Link href="/" className="font-semibold hover:text-blue-400">
          Pricing
        </Link>
        <Link href="/" className="font-semibold">
          Resources
        </Link>
        <Link href="/" className="font-semibold">
          Community
        </Link>
        <Link href="/" className="font-semibold hover:text-blue-400">
          Download
        </Link>
      </div>
      <ul className="flex gap-3 font-normal ">
     <div className="flex justify-center items-center hover:opacity-70 gap-2 px-2 py-1 cursor-pointer ">
     <FaGithub size={17} className="" />
        <Link
          href="/"
          className="text-[15px]"
        >
          Star Us
        </Link>
     </div>
        <Link
          href="/"
          className="flex justify-center items-center border border-[#ffffff2f] text-[12px] font-semibold px-4 py-1 rounded-full hover:bg-[#ffffff20] ease-in-out duration-200 uppercase "
        >
          Sign In
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center border border-[#ffffff2f] text-[12px] font-semibold px-4 py-1 rounded-full hover:bg-[#ffffff20] ease-in-out duration-200 uppercase "
        >
          Get Started
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

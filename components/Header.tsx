"use client";

import Image from "next/image";
import Avatar from "@/images/Iyanu.png";
import { CiBellOn } from "react-icons/ci";
import { FaRegEdit, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" pt-3 bg-white  border-b pb-2 shadow-sm">
      <div className="flex flex-row justify-between container mx-auto max-w-[1350px]">
        <div className="font-bold text-3xl">Melium</div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#959595] font-normal">
            <FaSearch />
          </div>

          <input
            type="text"
            placeholder="Search anything"
            className="outline-none border-2 border-[#fff] placeholder:text-[#959595] bg-[#F9F9F9] p-2 pl-10 pr-4 rounded-full w-[300px]"
          />
        </div>
        <div className="flex flex-row gap-x-5 items-center">
          <div className="flex flex-row gap-x-3 items-center">
            <div className="flex flex-row gap-x-1 items-center">
              <div className="text-2xl font-light text-gray-500 hover:text-black">
                <FaRegEdit />
              </div>
              <h1 className="text-base text-gray-500 font-light ">Write</h1>
            </div>
          </div>
          <div className="text-3xl text-gray-500 hover:text-black">
            <CiBellOn />
          </div>
          <div>
            <Image
              src={Avatar}
              alt="avatar image"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

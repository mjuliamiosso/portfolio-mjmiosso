"use client";

import { type FC } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop: FC = () => (
  <a
    href="#"
    className="fixed z-[6] bottom-[30px] right-[30px] border-none rounded-full w-[45px] h-[45px] cursor-pointer flex items-center justify-center bg-[rgba(0,0,0,1)] text-white opacity-[0.5] text-2xl"
    aria-label="Back to top"
  >
    <IoIosArrowUp />
  </a>
);

export default BackToTop;

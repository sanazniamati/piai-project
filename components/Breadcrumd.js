import React from "react";
import Image from "next/image";
import divider from "../public/image/icons/divider.svg";

function Breadcrumd() {
  return (
    <div
      className={
        "sm:hidden md:hidden lg:flex mx-[16px] gap-[9.5px] lg:mx-[65px] xl:mx-[248px] 2xl:mx-[404px]"
      }
    >
      <div className={"text-[14px] font-medium leading-6 text-gray "}>Home</div>
      <Image src={divider} alt={"divider"} />
      <div className={"text-[14px] font-medium leading-6 text-white "}>
        About Us
      </div>
    </div>
  );
}

export default Breadcrumd;

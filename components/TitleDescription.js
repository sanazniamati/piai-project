import React from "react";
import Image from "next/image";
import title from "../public/image/title.svg";

function TitleDescription({ data }) {
  return (
    <div className="flex-row justify-center items-center">
      <div className=" h-[60px] flex items-center justify-center">
        <Image src={title} alt="title" />
      </div>
      <div className="pt-[20px] xl:mx-[248px]">
        <p className="mx-[16px] text-[#9497A1] text-center">{data.text}</p>
      </div>
    </div>
  );
}

export default TitleDescription;

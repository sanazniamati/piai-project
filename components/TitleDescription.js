function TitleDescription({ data }) {
  return (
    <div className="flex-row justify-center items-center lg:mx-[45px] xl:mx-[248px] md:mt-[66px]">
      <div className=" h-[60px] flex items-center justify-center">
        <div
          className={
            "font-mono text-[25px] leading-[60px] font-extrabold md:text-[46px]"
          }
        >
          <span className={"text-Aurora"}>CONTACT </span>
          <span className={"text-orange"}> US</span>
        </div>
      </div>
      <div className="pt-[20px] ">
        <p className="mx-[16px] text-[#9497A1] text-center lg:text-[20px] xl:mx-0">
          {data.text}
        </p>
      </div>
    </div>
  );
}

export default TitleDescription;

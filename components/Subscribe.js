function Subscribe() {
  return (
    <div>
      {/*subscribe section*/}
      <div
        className={
          "bg-orange px-[16px] pt-[50px] mb-[10px] py-[70px] lg:flex lg:justify-between xl:px-[248px] "
        }
      >
        <div className={""}>
          <div
            className={
              "mx-[16px] font-extrabold text-white text-[30px] md:text-[38px] leading-[40px] text-center font-mono tracking-tighter mb-[25px] md:mx-[90px] md:-tracking-wider lg:mx-[45px] lg:text-start lg:w-[540px] xl:mx-0  "
            }
          >
            Subscribe to our newsletter
          </div>
          <div
            className={
              "sm:hidden md:flex mx-[126px] text-white text-center text-[20px] font-normal font-sans lg:text-start lg:mx-[45px] lg:w-[540px] xl:mx-0 "
            }
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </div>
        </div>
        <div
          className={
            "md:flex md:mx-[190px] md:mt-[83px] lg:mx-0 lg:w-[445px] lg:mr-[45px] xl:mr-0 "
          }
        >
          <input
            className={
              "py-[15px] px-[19px] text-black rounded-[5px] mb-[20px] w-full md:w-[445px] "
            }
            type={"email"}
            placeholder={"Your email"}
          />
          <div
            className={
              "bg-[#0E0E35] w-full flex justify-center rounded-[5px] py-[15px] text-[#99EFD0]  md:px-[10px] md:h-[54px] md:w-[125px] "
            }
          >
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;

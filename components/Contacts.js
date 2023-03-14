function Contacts() {
  return (
    <div className={"lg:flex lg:mx-[48px]  "}>
      <div>
        <div className="mt-[87px]  justify-center ">
          <div className=" mx-[16px] lg:mx-0 text-center text-Aurora text-[30px] tracking-tight font-extrabold heading-[40px] font-mono md:mx-[106px] lg:text-start ">
            Left questions? Contacts us now for a free consultation and free
            trial!
          </div>
          <div
            className={
              "text-center text-gray text-[16px] font-normal leading-[28px] sm:hidden md:flex md:mx-[114px] lg:mx-0 mt-[24px] lg:text-start"
            }
          >
            Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </div>
        </div>
        {/*contacts*/}
        <div className="  mx-[16px] text-center mt-[125px] md:mt-[80px] lg:text-start">
          <div className="email  ">
            <p className="text-[#9497A1]">Email address</p>
            <p className="text-[#99EFD0]">ensome@info.co.us</p>
          </div>
          <div className="phone mt-[22px]">
            <p className="text-[#9497A1]">Phone number</p>
            <p className="text-[#99EFD0]">+1601-201-5580</p>
          </div>
          <div className="address mt-[22px]">
            <p className="text-[#9497A1]">Address</p>
            <p className="text-[#99EFD0]">
              1642 Washington Avenue, Jackson, MS, Mississippi, 39201
            </p>
          </div>
        </div>
      </div>
      {/*contactUs*/}
      <div className=" shadow-3xl mx-[16px] lg:mx-0 mt-[95px] pb-[10px] mb-[95px] bg-[ #191B51] md:mx-[114px] ">
        <div
          className={
            "text-center md:text-start md:ml-[60.67px] text-[#99EFD0] pt-[55px] mb-[30px] font-extrabold text-[30px] leading-[40px] font-mono "
          }
        >
          Contact Us
        </div>
        <form className={"ml-[21px] mr-[19px] mb-[37px] md:mx-[97px]"}>
          <div>
            <div className="flex flex-col gap-[5px] ">
              <label
                className={
                  "text-gray text-[12px] font-semibold leading-6 -tracking-[1.5%]"
                }
              >
                Name
              </label>
              <input
                className="bg-transparent text-Aurora outline-none  "
                type="text"
                placeholder="Andrea"
              />

              <div className="w-[288px border border-solid border-[#9497A1]"></div>
            </div>
            <div className="flex flex-col gap-[5px] mt-[20px]">
              <label
                className={
                  "text-gray text-[12px] font-semibold leading-6 -tracking-[1.5%]"
                }
              >
                Email
              </label>
              <input
                className="text-Aurora outline-none bg-transparent"
                type={"email"}
                placeholder="andrea@gmaol.com"
              />
              <div className="w-[288px border border-solid border-[#9497A1]"></div>
            </div>
            <div className="flex flex-col gap-[5px] mt-[20px]">
              <label
                className={
                  "text-gray  text-[12px] font-semibold leading-6 -tracking-[1.5%]"
                }
              >
                Theme
              </label>
              <input
                className="text-Aurora outline-none bg-transparent"
                placeholder="Job"
              />
              <div className="w-[288px border border-solid border-[#9497A1]"></div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <label
                className={
                  "text-gray  text-[12px] font-semibold leading-6 -tracking-[1.5%]"
                }
              >
                Message
              </label>
              <input
                className="text-Aurora outline-none bg-transparent"
                placeholder="Your message"
              />
              <div className="w-[288px border border-solid border-[#9497A1]"></div>
            </div>
          </div>
          <div className={"flex justify-end"}>
            <button
              className={
                "shadow-3xl text-white w-[68px] py-[10px] px-[14px] bg-orange rounded-[6px] mt-[86px] md:w-[166.25px] "
              }
            >
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;

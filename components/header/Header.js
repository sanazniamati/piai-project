// library
import Image from "next/image";
// icons
import piaiIcon from "../../public/image/paiaIcon.svg";
import union from "../../public/image/Union.png";
import hammergerIcon from "../../public/image/hammergerIcon.png";
import userIcon from "../../public/image/userIcon.svg";
import notifyIcon from "../../public/image/notify.svg";
import closeIcon from "../../public/image/closeIcon.svg";

function Header() {
  return (
    <header className="flex justify-between items-center  px-[20px] py-[16px] lg:mx-[45px] xl:mx-[248px] 2xl:mx-[404px]  ">
      {/*left side*/}
      <div className="flex gap-[40px]">
        <Image className="md:hidden" src={piaiIcon} alt="paiaIcon" />
        <Image className="sm:hidden md:block" src={union} alt="union Icon" />
        <nav className="flex gap-[41px] top-[5px]  sm:hidden md:flex ">
          <div className="text-[14px] text-[#9497A1] font-medium leading-6">
            Home
          </div>
          <div className="text-[14px] text-[#9497A1] font-medium leading-6">
            Dashboard
          </div>
          <div className="text-[14px] text-[#9497A1] font-medium leading-6">
            Blog
          </div>
          <div className="text-[14px] text-[#9497A1] font-medium leading-6">
            About Us
          </div>
          <div className="text-[14px] text-[#99EFD0] font-medium leading-6">
            Contact us
          </div>
        </nav>
      </div>
      {/*right side*/}
      <div className="flex gap-[20px]">
        <Image
          className="md:hidden"
          width={24}
          height={24}
          src={hammergerIcon}
          alt="paiaIcon"
        />
        <Image
          className="sm:hidden md:block lg:hidden"
          width={24}
          height={24}
          src={userIcon}
          alt="paiaIcon"
        />
        <Image
          className="sm:hidden md:block lg:hidden"
          width={24}
          height={24}
          src={notifyIcon}
          alt="paiaIcon"
        />
        <Image
          className="sm:hidden md:block lg:hidden"
          width={24}
          height={24}
          src={closeIcon}
          alt="paiaIcon"
        />
        <div className="flex gap-[12px] sm:hidden lg:flex">
          <button className="w-[112px] h-[36px] flex items-center border border-solid border-[#F2994A] rounded-[6.95px] py-[11px] px-[26px] text-[#F2994A] font-bold text-base leading-6 -tracking-[1.5%]	   ">
            Log in
          </button>
          <button className="w-[112px] h-[36px] flex items-center bg-[#F2994A] rounded-[6.95px] py-[11px] px-[26px] text-[#FFFFFF] font-bold text-base leading-6 -tracking-[1.5%]">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

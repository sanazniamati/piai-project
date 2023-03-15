import React from "react";
import Image from "next/image";
import piaiIcon from "../../public/image/paiaIcon.svg";
import chervron_down from "../../public/image/chervron_down.png";
import facebook from "../../public/image/social_icons/facebook.svg";
import twitter from "../../public/image/social_icons/twitter.svg";
import linkdin from "../../public/image/social_icons/linkdin.svg";
import youtube from "../../public/image/social_icons/youtube.svg";
import dribbble from "../../public/image/social_icons/dribbble.svg";
import behance from "../../public/image/social_icons/behance.svg";
import arrow from "../../public/image/icons/arrow.svg";

function Footer() {
  return (
    <footer className={"xl:mx-[248px] 2xl:mx-[404px]"}>
      <div
        className={
          "md:mx-[161.5px] md:mt-[50px] mb-[30px] lg:flex lg:justify-between lg:mx-[45px]  "
        }
      >
        <Image
          className={"mx-[16px] mt-[60px] md:mx-0 lg:mt-0"}
          src={piaiIcon}
          alt={"paia-icon"}
        />
        {/*links*/}
        <div className={" sm:hidden md:flex gap-[90px] mt-[50px] "}>
          <ul className={"text-Aurora text-[14px] font-normal"}>
            <li className={"text-[16px] font-bold"}>About</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Solutions</li>
          </ul>
          <ul className={"text-Aurora text-[14px] font-normal"}>
            <li className={"text-[16px] font-bold"}>Information</li>
            <li>Contacts</li>
            <li>Our team</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
          <ul className={"text-Aurora text-[14px] font-normal"}>
            <li className={"text-[16px] font-bold"}>Service</li>
            <li>pages</li>
            <li>Elements</li>
            <li>Site map</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div
        className={
          "font-bold text-[16px] footer-menu md:hidden mx-[16px] mb-[26px]"
        }
      >
        <div
          className={
            "  py-[15px] border-b border-solid border-gray w-full flex justify-between items-center"
          }
        >
          <div className={"text-Aurora"}>Quick link</div>
          <Image src={chervron_down} alt={"chervron_down"} />
        </div>
        <div
          className={
            " py-[15px] border-b border-solid border-gray w-full flex justify-between items-center"
          }
        >
          <div className={"text-Aurora"}>Service</div>
          <Image src={chervron_down} alt={"chervron_down"} />
        </div>
        <div
          className={
            " py-[15px] border-b border-solid border-gray w-full flex justify-between items-center"
          }
        >
          <div className={"text-Aurora"}>Cantact info</div>
          <Image src={chervron_down} alt={"chervron_down"} />
        </div>
      </div>
      {/*Line seprator*/}
      <div
        className={
          "sm:hidden md:block my-[10px]  w-full border-gray border-b border-solid"
        }
      ></div>
      <div className={"lg:flex lg:justify-between lg:mx-[45px]"}>
        {/*contacts*/}
        <div
          className={
            "sm:hidden md:flex mb-[50px] md:mx-[161.5px] text-Aurora gap-[40px] my-[60px] lg:mx-0"
          }
        >
          <div>
            <div className={"title text-[16px] font-bold text-Aurora "}>
              Contacts
            </div>
            <div>
              <div>+1 601-201-5580</div>
              <div className={"flex"}>
                <div>ensome@info.co.us</div>
                <Image src={arrow} alt={"arrow"} />
              </div>
            </div>
          </div>
          <div>
            <div>1642 Washington Avenue, Jackson, MS, 39201</div>
            <div className={"flex"}>
              <div>Driving derections</div>
              <Image src={arrow} alt={"arrow"} />
            </div>
          </div>
        </div>
        {/*Line seprator*/}
        <div
          className={
            "sm:hidden md:block lg:hidden my-[60px]  my-[10px]  w-full border-gray border-b border-solid"
          }
        ></div>
        {/*social-links*/}
        <div
          className={" mx-[16px] mb-[31px] flex justify-between items-center"}
        >
          <div className={"text-Aurora md:hidden font-bold text-[16px] "}>
            Follow us
          </div>
          <div className={"icons md:mx-auto "}>
            <div className={"text-Aurora font-bold sm:hidden md:block"}>
              Social
            </div>
            <div className={"flex gap-[12px] py-[15px]"}>
              <div className={""}>
                <Image src={facebook} alt={""} />
              </div>
              <div className={""}>
                <Image src={twitter} alt={""} />
              </div>
              <div className={""}>
                <Image src={linkdin} alt={""} />
              </div>
              <div className={""}>
                <Image src={youtube} alt={""} />
              </div>
              <div className={""}>
                <Image src={dribbble} alt={""} />
              </div>
              <div className={""}>
                <Image src={behance} alt={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Line seprator*/}
      <div
        className={
          " sm:hidden lg:block  my-[10px]  w-full border-gray border-b border-solid"
        }
      ></div>
      {/*footer_copyright*/}
      <div className={" md:flex justify-between md:mb-[30px]"}>
        <div
          className={
            "mx-[16px] flex gap-[15px] text-Aurora text-[12px] font-normal leading-[18px] md:text-gray  "
          }
        >
          <p className={"md:flex items-center md:gap-[5px]"}>
            Privacy policy
            <Image className={"sm:hidden md:block"} src={arrow} alt={arrow} />
          </p>
          <p className={"md:flex items-center md:gap-[5px]"}>
            Terms of us
            <Image className={"sm:hidden md:block"} src={arrow} alt={arrow} />
          </p>
        </div>
        <div
          className={
            "my-[10px] md:hidden w-full border-gray border-b border-solid"
          }
        ></div>
        <div
          className={
            " flex mx-[16px] mb-[10px]  text-gray text-[12px] font-normal leading-[18px] md:flex-col lg:flex-row"
          }
        >
          <p>Ensome © 2022 All </p>
          <p> Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

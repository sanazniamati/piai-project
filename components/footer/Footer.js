import React from "react";
import Image from "next/image";
import paiaIcon from "../../public/image/paiaIcon.png";
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
    <footer>
      <div className={"md:mx-[161.5px] md:mt-[50px] mb-[50px]"}>
        <div className={"mx-[16px] md:mx-0"}>
          <Image src={paiaIcon} alt={"paia-icon"} />
        </div>
        <div className={"links sm:hidden md:flex gap-[90px] mt-[50px] "}>
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
      <div className={"footer-menu md:hidden mx-[16px] mb-[26px]"}>
        <div
          className={
            " py-[15px] border-b border-solid border-gray w-full flex justify-between items-center"
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
      <div
        className={"my-[10px]  w-full border-gray border-b border-solid"}
      ></div>
      <div
        className={
          "sm:hidden md:flex mb-[50px] md:mx-[161.5px] text-Aurora gap-[40px] my-[60px]"
        }
      >
        <div className={" "}>
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
      <div
        className={
          "my-[60px]  my-[10px]  w-full border-gray border-b border-solid"
        }
      ></div>
      <div className={"social-links mx-[16px] mb-[31px] flex justify-between"}>
        <div className={"text-Aurora md:hidden"}>Follow us</div>
        <div className={"icons md:mx-auto "}>
          <div className={"text-Aurora font-bold"}>Social</div>
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
      <div className={"copyright md:flex justify-between"}>
        <div
          className={
            "mx-[16px] flex gap-[15px] text-Aurora text-[12px] font-normal leading-[18px] md:text-gray  "
          }
        >
          <p>Privacy policy</p>
          <p>Terms of us</p>
        </div>
        <div
          className={
            "my-[10px] md:hidden w-full border-gray border-b border-solid"
          }
        ></div>
        <div
          className={
            " flex mx-[16px] mb-[10px]  text-gray text-[12px] font-normal leading-[18px] md:flex-col"
          }
        >
          <p>© 2022 Ensome All </p>
          <p> Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import { menuItems } from "@/utils/data/menuItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const NavigationSlider = ({
  hideNavigation,
  setHideNavigation,
}: {
  hideNavigation: boolean;
  setHideNavigation: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!hideNavigation) {
      return disablePageScroll();
    }

    enablePageScroll();
    return () => {
      enablePageScroll();
    };
  }, [hideNavigation]);

  return (
    <>
      <button
        className={`${
          hideNavigation ? " hidden" : "flex"
        }  bg-black/10 fixed top-0  h-screen w-full right-0 z-[50]`}
        onClick={() => setHideNavigation(true)}
      />

      <div
        className={` md:hidden w-[80%] fixed top-0  h-screen bg-white z-[60]  transform transition-all duration-500  ${
          hideNavigation ? " right-[-1000%]" : "right-0"
        }`}
      >
        <div className=" flex items-center justify-between px-4  h-[60px]">
          <Link onClick={() => setHideNavigation(false)} href={`/`}>
            <Image
              src="/icons/Logo.svg"
              width={100}
              height={100}
              alt="entapp tech logo"
              className=" w-auto h-[32px]"
            />
          </Link>

          <button onClick={() => setHideNavigation(true)} className="  py-1">
            <IoClose size={24} />
          </button>
        </div>

        <div className=" mt-5">
          <div className=" px-4 mx-auto bg-white">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-divider-100  py-4 last:border-none"
              >
                <Link onClick={() => setHideNavigation(true)} href={item.href}>
                  <div
                    className={`${
                      pathname.includes(item.href) ? "text-secondary" : ""
                    } duration-500 transition-all flex justify-between items-center  py-[1vh] px-6 hover:bg-gray-100`}
                  >
                    <span
                      className={`text-[14px]  uppercase font-medium text-[#081127] ${
                        pathname.includes(item.href) ? "text-secondary" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                    <IoIosArrowForward size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-4 mt-14">
          <button
            onClick={() => setHideNavigation(true)}
            className="uppercase  hover:scale-95 duration-500 transition-all 
           w-full px-4 bg-secondary h-[50px] text-[14px] font-semibold text-white rounded-[5px]"
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationSlider;

import { LuPhone } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaSlack } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";


const HeaderBanner = ({ scroll }: { scroll: boolean }) => {
  return (
    <motion.div
      className={`text-white  px-4  bg-primary  h-[0px]  overflow-hidden flex duration-500 transition-all items-center text-[14px] font-montserrat top-0 sticky ${
        scroll ? " md:h-[0px]" : "md:h-[50px]"
      }`}
    >
      <div className=" text-white  px-4 items-center flex-1 hidden md:flex justify-between max-width ">
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-2">
            <TbClockHour4 size={16} className=" text-secondary" />
            <span>Mon - Sat 9:00 - 18:00</span>
          </div>
          <div className=" flex items-center gap-2">
            <LuPhone size={16} className=" text-secondary" />
            <span>(+1) 61552 42890</span>
          </div>
        </div>
        <div className=" flex  flex-1  justify-end items-center gap-10">
          <div className=" flex items-center gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://slack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSlack size={16} />
            </a>
          </div>
          <button
            className={`uppercase bg-secondary px-5 overflow-hidden  items-center justify-center duration-500 transition-all ${
              scroll ? " h-[0px] overflow-hidden" : "h-[50px]"
            }`}
          >
            Fix an appointment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderBanner;

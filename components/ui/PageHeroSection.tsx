import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";

const PageHeroSection = ({ title, bg }: { title: string; bg?: string }) => {
  return (
    <>
      <section
        className={` z-0  fixed  w-full  bg-cover ${bg ? bg : " bg-hero-bg"}`}
      >
        <header className="  bg-[#151D3A]/60  md:w-full">
          <div className="py-40 opacity-0 md:py-56 px-4 max-width">
            <div className=" text-white text-center md:text-start">
              <motion.h1
                variants={item}
                className="   font-semibold  text-5xl md:text-[64px] md:leading-[80px]  uppercase"
              >
                {title}
              </motion.h1>
            </div>
          </div>
        </header>
      </section>

      <section className=" relative z-20 bg-cover">
        <header className=" md:w-full">
          <motion.div {...parentItem} className="py-40 md:py-56 px-4 max-width">
            <div className=" text-white text-center md:text-start">
              <motion.h1
                variants={item}
                className="   font-semibold text-center  text-5xl md:text-[64px] md:leading-[80px]  uppercase"
              >
               {title}
              </motion.h1>
            </div>
          </motion.div>
        </header>
      </section>
    </>
  );
};

export default PageHeroSection;

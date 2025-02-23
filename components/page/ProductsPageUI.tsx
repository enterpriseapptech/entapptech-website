"use client";

import SectionTitle from "../ui/SectionTitle";

import { solutionData } from "@/utils/data/solutionData";
import SolutionCard from "../ui/SolutionCard";

import GetInTouchButton from "../button/GetInTouchButton";
import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";
import PageHeroSection from "../ui/PageHeroSection";

const ProductsPageUI = () => {
  return (
    <main className="  font-montserrat ">
      <PageHeroSection title="OUR Products" />

      <section className="relative z-20   bg-foreground py-10 md:py-20 ">
        <motion.div {...parentItem} className=" max-width ">
          <motion.div variants={item} className=" text-center px-4 ">
            <SectionTitle title="Our Products" />
            <h2 className=" mt-2 main-header">
              Our Innovative Product Solutions
            </h2>
            <p className=" main-h5  text-divider-300  font-inter">
              Explore a range of tailored enterprise solutions designed to
              optimize workflows, manage data efficiently, and enhance
              productivity. From mobile applications to robust cloud platforms,
              our products drive modern businesses toward success.
            </p>
          </motion.div>

          <motion.div
            {...parentItem}
            className="grid px-4 grid-cols-2  mt-[64px] md:grid-cols-2  gap-5 md:gap-10"
          >
            {solutionData.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className=" relative z-20  text-white bg-stats-mbg  sm:bg-stats-bg ">
        <div className="  bg-cover  py-20  bg-[#0047AB]/95 md:bg-[#0047AB]/60">
          <motion.div
            {...parentItem}
            className=" max-width  px-4 flex flex-col items-center  text-center"
          >
            <motion.h2
              variants={item}
              className=" mt-2 text-[24px] md:text-[32px] md:leading-[64px] uppercase leading-[45px] font-semibold"
            >
              Empowering Businesses with Custom Software Solutions for Success
            </motion.h2>
            <GetInTouchButton />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPageUI;

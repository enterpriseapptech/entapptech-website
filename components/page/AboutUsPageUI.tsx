"use client";

import { statsData } from "@/utils/data/statsData";
import StatCard from "../ui/StatCard";
import Image from "next/image";
import GetInTouchButton from "../button/GetInTouchButton";
import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";
import PageHeroSection from "../ui/PageHeroSection";

const AboutUsPageUI = () => {
  return (
    <main className="  font-montserrat ">
      <PageHeroSection title="ABOUT US" bg="bg-about-us-hero" />

      <section className=" relative  pt-10 md:pt-20 z-20 pb-10 md:pb-20  bg-white">
        <motion.div {...parentItem} className=" max-width">
          <motion.div
            variants={item}
            className=" flex flex-col md:grid md:grid-cols-2 md:gap-10 gap-4 mt-10 px-4"
          >
            <div className="">
              <h2 className="  flex mt-2 text-[32px]  uppercase leading-[64px] font-semibold">
                <h2 className=" mt-2  text-[24px] uppercase leading-[45px] font-semibold">
                  Where Innovation Meets Simplicity
                </h2>
              </h2>
              <p className="  text-[14px] md:text-[18px]  md:mt-4 md:text-start text-divider-300 font-openSans">
                At EntApp, we are dedicated to transforming businesses through
                innovative, custom software solutions. We specialize in
                simplifying the complexities of event management by providing
                seamless, user-friendly platforms for event hall bookings. Our
                mission is to streamline the event planning process and enhance
                customer experiences, helping businesses succeed with tailored
                solutions that fit their unique needs.
              </p>
              <div className=" mt-5 flex justify-start">
                <button className="  text-start  duration-500 transition-all   font-semibold flex gap-4">
                  <span className=" italic">
                    Building Tomorrow’s Businesses with Custom Software
                    Solutions
                  </span>
                </button>
              </div>
            </div>
            <Image
              height={200}
              width={200}
              alt=""
              src="/images/vision-1.png"
              className=" w-full h-[223px] md:h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        {...parentItem}
        className="relative z-20    text-white bg-stats-mbg  sm:bg-stats-bg "
      >
        <div className="  bg-cover  py-20   bg-[#0047AB]/95">
          <div className=" flex flex-col md:flex-row  max-width md:px-[10%] items-center space-y-8 md:space-y-0  md:space-x-8">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </motion.section>

      <section className=" relative  pt-10 md:pt-20 z-20 pb-10 md:pb-20  bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item}
          className=" max-width"
        >
          <motion.div
            variants={item}
            className=" flex flex-col md:grid md:grid-cols-2 md:gap-10 gap-4 mt-10 px-4"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/images/team-about.png"
              className=" w-full h-[223px] md:h-full object-cover"
            />
            <div className=" py-5 md:py-10">
              <div>
                <h2 className="  flex mt-2 text-[32px]  uppercase leading-[64px] font-semibold">
                  <h2 className=" mt-2  text-[24px] uppercase leading-[45px] font-semibold">
                    Mission
                  </h2>
                </h2>
                <p className="  text-[14px] md:text-[18px]  md:mt-4 md:text-start text-divider-300 font-openSans">
                  Our mission is to provide businesses with the tools they need
                  to streamline processes, enhance operations, and foster
                  growth. By offering tailored software solutions, we enable
                  companies to overcome challenges and unlock their full
                  potential. At entapp, we strive to be a trusted partner in
                  your journey toward success.
                </p>
              </div>

              <div className=" mt-20 md:mt-40">
                <h2 className="  flex mt-2 text-[32px]  uppercase leading-[64px] font-semibold">
                  <h2 className=" mt-2  text-[24px] uppercase leading-[45px] font-semibold">
                    Vision
                  </h2>
                </h2>
                <p className="  text-[14px] md:text-[18px] md:mt-4 md:text-start text-divider-300 font-openSans">
                  We envision a future where businesses, regardless of size, can
                  seamlessly integrate technology into their operations, driving
                  efficiency, innovation, and growth. Through our custom
                  software solutions, we aim to bridge the gap between
                  complexity and simplicity, making technology accessible and
                  impactful for all.
                </p>
              </div>
            </div>
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

export default AboutUsPageUI;

"use client";

import SectionTitle from "../ui/SectionTitle";
import { servicesData } from "@/utils/data/servicesData";
import ServiceCard from "../ui/ServiceCard";

import { teamMembers } from "@/utils/data/teamMembers";
import TeamCard from "../ui/TeamCard";
import ServiceSection from "../ServiceSection";
import GetInTouchButton from "../button/GetInTouchButton";
import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";
import PageHeroSection from "../ui/PageHeroSection";

const CompanyPageUI = () => {
  return (
    <main className="  font-montserrat ">
      <PageHeroSection title="Company" bg={`bg-company-hero`} />

      <motion.section className=" relative z-20   bg-foreground py-10 md:py-20">
        <motion.div {...parentItem} className="  max-width ">
          <motion.div variants={item} className=" text-center px-4 ">
            <SectionTitle title="What We Do" />
            <h2 className=" mt-2 main-header">Solutions That Drive Success</h2>
            <p className=" main-h5  text-divider-300  font-inter">
              We specialize in workflow automation, data management systems,
              cloud platforms, and mobile apps. Our solutions simplify
              complexity and empower your business to thrive in a competitive
              landscape.
            </p>
          </motion.div>

          <motion.div
            {...parentItem}
            className="hidden md:grid px-4 grid-cols-1 mt-[64px]  md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
          <ServiceSection />
        </motion.div>
      </motion.section>

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

      <section className=" relative z-20   bg-white py-10  md:py-20">
        <motion.div {...parentItem} className=" max-width">
          <motion.div variants={item} className=" text-center px-4 ">
            <SectionTitle title="WHO WE ARE" />
            <h2 className=" mt-2 main-header">
              Meet the Team Behind the Innovation
            </h2>
            <p className="main-h5  text-divider-300  font-inter">
              At the heart of Enterprise Application Tech LLC is a dedicated
              team of experts committed to crafting innovative solutions. With
              diverse skills and a shared vision, we collaborate to transform
              complex challenges into impactful software solutions that drive
              growth and success.
            </p>
          </motion.div>

          <motion.div
            {...parentItem}
            className="grid px-4 grid-cols-1 md:grid-cols-3 mt-[64px]    gap-5"
          >
            {teamMembers.map((solution, index) => (
              <TeamCard key={index} {...solution} />
            ))}
          </motion.div>
        </motion.div>
        <div id="get-in-touch" />
      </section>
    </main>
  );
};

export default CompanyPageUI;

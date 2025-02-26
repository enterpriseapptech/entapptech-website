"use client";

import Link from "next/link";
import AboutUs from "../AboutUs";
import { statsData } from "@/utils/data/statsData";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";
import { servicesData } from "@/utils/data/servicesData";
import ServiceCard from "../ui/ServiceCard";
import FeatureCard from "../ui/FeatureCard";
import { featuresData } from "@/utils/data/featuresData";
import { solutionData } from "@/utils/data/solutionData";
import SolutionCard from "../ui/SolutionCard";
import { teamMembers } from "@/utils/data/teamMembers";
import TeamCard from "../ui/TeamCard";
import GetInTouch from "../GetInTouch";
import ServiceSection from "../ServiceSection";
import Image from "next/image";
import GetInTouchButton from "../button/GetInTouchButton";
import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";

const LandingPageUI = () => {
  return (
    <main className="  font-montserrat ">

      <section className=" z-0  fixed bg-hero-bg  w-full  bg-cover">
        <header className="  bg-[#151D3A]/60  md:w-full">
          <div className="py-40 opacity-0 md:py-52 px-4 max-width">
            <div className=" text-white text-center md:text-start">
              <h1 className="  font-semibold md:hidden text-5xl md:text-[64px] md:leading-[80px]  uppercase">
                Business, Simplifying Complexity.
              </h1>
              <h1 className=" hidden  font-semibold md:block text-5xl md:text-[64px] md:leading-[80px]  uppercase">
                Innovating Business, Simplifying Complexity.
              </h1>
              <p className="  mt-5 text-[24px] font-openSans">
                Transforming businesses through tailored software solutions.
              </p>
            </div>
            <div className=" md:flex-row w-full uppercase flex flex-col gap-[30px] mt-[64px]">
              <Link href={"#"}>
                <button className="uppercase md:px-5 w-full bg-secondary hover:scale-95 duration-500 transition-all h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
                  learn more{" "}
                </button>
              </Link>
              <Link href={"/contact"}>
                <button className=" border-2 md:px-5 hover:scale-95 duration-500 transition-all border-white font-semibold h-[50px] text-[14px] text-white  uppercase w-full rounded-[5px]">
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </header>
      </section>

      <section className=" relative z-20 bg-cover">
        <header className=" md:w-full">
          <motion.div {...parentItem} className="py-40 md:py-52 px-4 max-width">
            <div className=" text-white text-center md:text-start">
              <motion.h1
                variants={item}
                className="  font-semibold md:hidden text-5xl md:text-[64px] md:leading-[80px]  uppercase"
              >
                Business, Simplifying Complexity.
              </motion.h1>
              <motion.h1
                variants={item}
                className=" hidden  font-semibold md:block text-5xl md:text-[64px] md:leading-[80px]  uppercase"
              >
                Innovating Business, Simplifying Complexity.
              </motion.h1>
              <motion.p
                variants={item}
                className="  mt-5 text-[24px] font-openSans"
              >
                Transforming businesses through tailored software solutions.
              </motion.p>
            </div>
            <motion.div
              variants={item}
              className=" md:flex-row w-full uppercase flex flex-col gap-[30px] mt-[64px]"
            >
              <Link href={"#"}>
                <button className="uppercase md:px-5 w-full bg-secondary hover:scale-95 duration-500 transition-all h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
                  learn more{" "}
                </button>
              </Link>
              <Link href={"/contact"}>
                <button className=" border-2 md:px-5 hover:scale-95 duration-500 transition-all border-white font-semibold h-[50px] text-[14px] text-white  uppercase w-full rounded-[5px]">
                  contact us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </header>
      </section>

      <AboutUs />

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

      <motion.section
        {...parentItem}
        className="relative z-20 bg-white pt-10 md:pt-20 "
      >
        <div className="  max-width ">
          <motion.div variants={item} className=" text-center px-4 ">
            <SectionTitle title="WHY CHOOSE US?" />
            <h2 className=" mt-2 main-header">
              Why We’re Your Perfect Partner
            </h2>
            <p className="main-h5 text-divider-300  font-inter">
              Our dedication to innovation, personalized solutions, and agile
              development sets us apart. We deliver transformative results
              tailored to your business needs, ensuring seamless success and
              growth.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...parentItem}
          className="grid  max-width  px-4 grid-cols-1 mt-[64px] pb-10 md:pb-20 md:grid-cols-3  gap-5"
        >
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </motion.section>

      <section className="relative z-20 ">
        <div className=" bg-primary relative md:flex md:flex-row-reverse text-white">
          <Image
            src="/images/a-man.png"
            className=" object-cover md:hidden object-top w-full h-[350px] "
            width={400}
            height={400}
            alt=""
          />
          <Image
            src="/images/Frame-image.png"
            className=" object-cover  object-right-top hidden md:flex  w-full h-[589px] "
            width={400}
            height={400}
            alt=""
          />

          <motion.div
            {...parentItem}
            className="  md:absolute md:left-0 h-full flex-col flex items-start md:px-20 justify-center  md:w-[60%] bg-primary"
          >
            <div className=" px-4 py-10 md:py-auto pb-14">
              <motion.h2
                variants={item}
                className=" mt-2 text-[24px] md:text-[32px] md:leading-[64px] uppercase leading-[45px] font-semibold"
              >
                Trusted for Cutting-Edge ICT Solutions
              </motion.h2>
              <motion.p
                variants={item}
                className="text-[14px] mt-2 leading-[32px] md:text-[18px] md:leading-[32px] font-inter"
              >
                From enterprise IT infrastructure to seamless event hall booking
                systems, our solutions are designed to drive innovation and
                efficiency. Empower your business with technology that works for
                you.
              </motion.p>
            </div>
            <motion.div variants={item} className=" px-4 pb-14">
              <button className="uppercase hover:scale-95 duration-500 transition-all   px-4 bg-secondary h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
                Discover Our ICT Solutions
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

      <GetInTouch />
    </main>
  );
};

export default LandingPageUI;

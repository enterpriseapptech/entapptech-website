import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const AboutUs = () => {
  const item = {
    hidden: {
      y: 70,
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.5,
        repeat: 0,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        duration: 0.5,
        repeat: 0,
      },
    },
  };

  return (
    <section className=" relative  pt-10 md:pt-20 z-20 pb-10 md:pb-20  bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
        className=" max-width"
      >
        <motion.div variants={item} className=" text-center px-4 ">
          <SectionTitle title="About us" />
          <h2 className=" mt-2 md:hidden text-[24px] uppercase leading-[45px] font-semibold">
            Discover Our Passion for Innovation
          </h2>
        </motion.div>

        <motion.div
          variants={item}
          className=" flex flex-col md:grid md:grid-cols-2 md:gap-10 gap-4 mt-10 px-4"
        >
          <Image
            height={200}
            width={200}
            alt=""
            src="/images/vision-1.png"
            className=" w-full h-[223px] md:h-full object-cover"
          />
          <div className="">
            <h2 className=" hidden md:flex mt-2 text-[32px]  uppercase leading-[64px] font-semibold">
              Driving Tomorrow&apos;s Solutions, Today
            </h2>
            <p className="  text-[14px] md:text-[18px] text-center md:mt-4 md:text-start text-divider-300 font-openSans">
              At EntApp, we are dedicated to transforming businesses through
              innovative, custom software solutions. We specialize in
              simplifying the complexities of event management by providing
              seamless, user-friendly platforms for event hall bookings. Our
              mission is to streamline the event planning process and enhance
              customer experiences, helping businesses succeed with tailored
              solutions that fit their unique needs.
            </p>
            <div className=" mt-5 flex justify-end">
              <button className="  hover:font-semibold duration-500 transition-all  text-secondary items-center flex gap-4">
                <span className=" italic">Learn more about us</span>
                <BsArrowRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

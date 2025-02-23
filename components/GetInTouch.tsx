import Image from "next/image";
import GetInTouchForm from "./form/GetInTouchForm";
import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";

const GetInTouch = () => {
  return (
    <section className="relative z-20 px-4 py-16 md:py-20 bg-[#F5F5F8]">
      <motion.div
        {...parentItem}
        className=" font-montserrat  max-width gap-10  flex flex-col md:flex-row"
      >
        <motion.div
          variants={item}
          className=" md:w-[60%] flex flex-col gap-10 justify-between"
        >
          <div>
            <h3 className="  text-[24px] md:text-[32px] md:leading-[64px]  uppercase leading-[45px] font-semibold">
              {`Let’s`} stay connected
            </h3>
            <p className=" mt-2 font-inter md:text-[18px]  md:leading-[32px] leading-[24px] text-[14px] text-divider-300 pb-5">
              At the heart of Enterprise Application Tech LLC is a dedicated
              team of experts committed to crafting innovative solutions. With
              diverse skills and a shared vision, we collaborate to transform
              complex challenges into impactful software solutions that drive
              growth and success.
            </p>
          </div>
          <Image
            src={"/images/contact.png"}
            className=" w-full  h-auto"
            width={200}
            height={200}
            alt=""
          />
        </motion.div>

        <motion.div variants={item} className=" flex-1 p-6 py-10 bg-white">
          <div className=" uppercase">
            <span className=" text-[14px] text-divider-300 font-medium">
              Still have questions?
            </span>
            <h3 className=" text-[32px] font-semibold ">Get in touch</h3>
          </div>
          <GetInTouchForm />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;

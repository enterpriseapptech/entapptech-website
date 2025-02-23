"use client";

import { sliderSettings } from "@/utils/common";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import ServiceCard from "./ui/ServiceCard";
import { servicesData } from "@/utils/data/servicesData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Import Swiper styles
import "swiper/css";

const ServiceSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      const updateStyles = () => {
        const currentIndex = swiper.activeIndex;
        setActiveIndex(currentIndex);
      };

      swiper.on("slideChange", updateStyles);
      updateStyles();

      return () => {
        swiper.off("slideChange", updateStyles);
      };
    }
  }, []);

  console.log(activeIndex);

  return (
    <section className=" pb-20 mx-auto md:hidden ">
      <div className="  mt-10  w-full relative mx-auto justify-center flex items-center">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          {...sliderSettings}
          style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          {[...servicesData].map((service, index: number) => (
            <SwiperSlide key={index}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" flex items-center  mt-5 justify-between px-4">
        <button
          onClick={() => swiperRef?.current?.slidePrev()}
          className="  rounded-[5px]  bg-[#828DA9] text-white p-2"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={() => swiperRef?.current?.slideNext()}
          className="  rounded-[5px]  bg-[#828DA9] text-white p-2"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;

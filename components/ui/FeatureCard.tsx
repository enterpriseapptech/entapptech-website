import { item } from "@/utils/motion";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      variants={item}
      className="flex flex-col font-montserrat items-center"
    >
      <Image
        src={image}
        alt={title}
        className="w-full  object-cover"
        width={300}
        height={300}
      />
      <div className="px-6 pb-6  border border-divider border-t-[0px] relative">
        <div className=" bg-secondary inline-flex relative p-4 rounded-[5px] top-[-30px]">
          <Image
            src={icon}
            alt={"icon"}
            className=" object-cover"
            width={26}
            height={26}
          />
        </div>
        <div className=" min-h-[170px]">
          <h3 className="text-xl  mb-2 font-medium">{title}</h3>
          <p className="text-divider-300 font-openSans">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;

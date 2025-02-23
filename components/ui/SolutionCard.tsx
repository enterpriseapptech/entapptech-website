import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { item } from "@/utils/motion";

// Define the props interface
interface SolutionCardProps {
  image: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <motion.div variants={item} className=" font-montserrat">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-full h-40  md:h-[342.78px] object-cover"
      />
      <div className="py-4 flex items-end   gap-5">
        <div className=" ">
          <h3 className="text-[14px] md:text-[24px]  font-medium mb-2">
            {title}
          </h3>
          <p className="text-divider-300 md:text-[16px] text-[12px] font-openSans">
            {description}
          </p>
        </div>

        <button className=" hidden md:flex bg-primary  text-white  rounded-[5px] p-2 ">
          <BsArrowUpRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default SolutionCard;

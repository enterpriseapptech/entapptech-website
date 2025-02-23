import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion } from "framer-motion";
import { item } from "@/utils/motion";


// Define the props interface
interface ServiceCardProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {

 
  return (
    <motion.div
    variants={item}
    
    className="bg-white p-6   pr-[20%] md:pr-6 h-[300px]  items-start justify-center  py-10 flex flex-col items-xtart text-start">
      <div>
        <Image
          src={icon}
          width={44}
          height={44}
          alt={title}
          className=" h-[50px] w-[50px]"
        />
        <div className="w-[50px] mt-4 border-b border-divider" />
      </div>
      <h3 className="text-xl  font-normal  mt-4 font-montserrat mb-2">
        {title}
      </h3>
      <p className="text-divider-300 font-openSans">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;

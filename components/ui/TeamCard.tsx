import Image from "next/image";
import { item } from "@/utils/motion";
import { motion } from "framer-motion";

// Define the props interface
interface TeamCardProps {
  id: number;
  image: string;
  name: string;
  role: string;
  description: string;
  onClick: (id: number) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  image, 
  name, 
  role, 
  onClick,
  id 
}) => {
  return (
    <motion.div 
      variants={item} 
      className="font-montserrat cursor-pointer group"
      onClick={() => onClick(id)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
            View Bio
          </span>
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-[24px] font-medium mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-1">
          <div className="w-[24px] border-b border-divider-300" />
          <p className="text-divider-300 italic text-[16px] font-openSans">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;

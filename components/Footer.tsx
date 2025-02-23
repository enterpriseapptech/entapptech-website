import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-primary  text-white py-5 px-4">
      <footer className=" max-width md:max-w-[1000px]  gap-5 flex-col md:flex-row flex md:justify-between md:items-center ">
        <Image
          src="/icons/Logo.svg"
          width={100}
          height={100}
          alt="entapp tech logo"
          className=" w-auto  h-[32px] "
        />
        <div className=" text-[12px]  text-center ">
          <span>
            <span className=" text-secondary">ENTAPP</span> Copyright © 2025 All
            Right Reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

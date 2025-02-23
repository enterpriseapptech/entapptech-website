const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center  justify-center space-x-4">
      <div className="w-1/4 max-w-[100px] border-b border-divider-300" />
      <h2 className="text-divider-300 uppercase text-[14px] font-montserrat  font-medium">
        {title}
      </h2>
      <div className="w-1/4 max-w-[100px] border-b border-divider-300" />
    </div>
  );
};

export default SectionTitle;

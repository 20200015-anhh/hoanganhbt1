import IconsGroup from "./IconsGroup";

const Footer = () => {
  return (
    <div className="w-screen items-end bg-transparent pb-2">
      <div className="flex justify-center w-full py-2 h-full items-end">
        <p className="text-advertisement-button">© </p>
        <p className="px-1 font-bold text-advertisement-button"> 2024 Highlands Coffee. </p>
        <p className="text-advertisement-button"> All right reserved</p>
      </div>
      <IconsGroup/>
    </div>
  );
};

export default Footer
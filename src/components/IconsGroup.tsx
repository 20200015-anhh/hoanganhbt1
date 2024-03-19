import { Icons } from "./Icons";

const IconsGroup = () => {
  return (
    <div className="flex w-full justify-center gap-2">
      <Icons.chrome
        className=" stroke-advertisement-button"
        width={20}
        height={20}
      />

      <Icons.face
        className=" stroke-advertisement-button outline-double outline-advertisement-button rounded-sm"
        width={20}
        height={20}
      />

      <Icons.youtube
        className=" stroke-advertisement-button"
        width={20}
        height={20}
      />
      <Icons.insta
        className=" stroke-advertisement-button"
        width={20}
        height={20}
      />
    </div>
  );
};

export default IconsGroup;

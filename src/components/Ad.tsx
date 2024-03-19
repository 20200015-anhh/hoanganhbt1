import { FC } from "react";

interface AdProps {
  link: string;
  name: string;
}

const Ad: FC<AdProps> = ({link,name}) => {
  return (
    <div
      className="flex aspect-square h-[15vh] w-full items-center justify-center rounded-3xl pb-1 md:w-full md:h-[18vh]"
    >
      <img src={link} className="h-full w-full rounded-md" />
    </div>
  );
};

export default Ad;

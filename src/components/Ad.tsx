import { FC } from "react";

interface AdProps {
  link: string;
  name: string;
}

const Ad: FC<AdProps> = ({link,name}) => {
  return (
    <div
      className="flex h-24 aspect-square w-48 items-center justify-center rounded-3xl pb-1"
    >
      <img src={link} className="h-full w-full rounded-md" />
    </div>
  );
};

export default Ad;

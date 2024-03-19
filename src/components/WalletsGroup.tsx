import { FC } from "react";
import Wallet from "./Wallet";

interface WalletsGroupProps {
  imgLinks: string[];
}

const WalletsGroup: FC<WalletsGroupProps> = ({ imgLinks }) => {
  return <li className="flex w-full justify-center gap-2 py-2">
    {imgLinks.map((imgLink,index) => (
        <Wallet key={index} imgLink={imgLink}/>
    ))}
  </li>
};

export default WalletsGroup;

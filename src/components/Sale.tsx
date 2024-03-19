import { FC, useEffect } from "react";
import { saleLinks, saleIds } from "~/temporarydb/sales";
import Poster from "./Poster";

interface SaleProps {
  id: string;
  link: string;
}

const Sale: FC<SaleProps> = ({ id, link }) => {
  
  return <div>
    <Poster link={link} id={id}/>
  </div>;
};

export default Sale;

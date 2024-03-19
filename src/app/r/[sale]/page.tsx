"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "~/components/ui/Input";
import { saleLinks, saleIds } from "~/temporarydb/sales";

export default function SalePage() {
  const params = useParams();
  const [link, setLink] = useState<string>("");
  useEffect(() => {
    const links = saleLinks;
    const ids = saleIds;
    for (let i = 0; i <= saleIds.length; i++)
      if (params.sale == ids[i]) setLink(links[i] || "");
  }, []);
  return (
    <>
      <div className="flex h-full w-full items-center justify-center gap-x-4 gap-y-2 px-4 py-2">
        <div className="h-[70vh] flex aspect-square w-[50vh] items-center justify-center rounded-3xl ">
          <div className="absolute top-[60vh] text-advertisement-text grid w-[50vh] grid-cols-5 gap-2 font-bold columns-xs px-2">
            <span className="col-span-2 text-left">MÃ ƯU ĐÃI</span>
            <Input value="abcxyz" className="border-advertisement-text w-6/7 col-span-3" />
            <span className="col-span-2 text-left">HẠN SỬ DỤNG</span>
            <Input value="abcxyz" className="border-advertisement-text w-6/7 col-span-3" />
            <span className="col-span-2 text-left">MÃ COUPON</span>
            <Input value="abcxyz" className="border-advertisement-text w-6/7 col-span-3" />
          </div>
          <img src={link} className=" h-full w-full rounded-md" />
        </div>
      </div>
    </>
  );
}

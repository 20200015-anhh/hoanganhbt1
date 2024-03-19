"use client";

import PostersMenu from "~/components/PosterMenu";
import SubAdvertisement from "~/components/SubAdvertisement";
import { saleLinks, saleIds } from "~/temporarydb/sales";

export default function HomePage() {
  const links = saleLinks;
  const ids = saleIds;
  return (
    <>
      <div className="items-end gap-x-4 gap-y-2 px-4 py-2">
        <SubAdvertisement />
        <div className="order-first rounded-lg ">
          <PostersMenu links={links} ids={ids} />
        </div>
      </div>
    </>
  );
}

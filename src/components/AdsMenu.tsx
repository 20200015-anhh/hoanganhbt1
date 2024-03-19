"use client";
import { FC } from "react";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/Carousel";
import Ad from "./Ad";

interface AdsMenuProps {
  links: string[];
}

const AdsMenu: FC<AdsMenuProps> = (links) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className="w-full justify-center gap-2 bg-transparent px-2 py-2">
      <div className="flex w-full justify-center gap-2 rounded-full px-2 py-2">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full items-start md:w-1/3"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {links.links.map((link, index) => (
              <CarouselItem key={index} className="basis-7/12 pt-1">
                <Ad link={link} name="" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default AdsMenu;

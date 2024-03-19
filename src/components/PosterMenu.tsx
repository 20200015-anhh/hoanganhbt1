`use client`;

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/Carousel";
import Poster from "./Poster";
import { Button } from "./ui/Button";

interface PostersMenuProps {
  links: string[];
  ids: string[];
}

const PostersMenu: FC<PostersMenuProps> = ({ links, ids }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const router = useRouter();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full justify-center gap-2 bg-transparent px-2 py-2">
      <div className="flex w-full justify-center gap-2 rounded-full px-2 py-2">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="relative h-fit w-full items-center justify-center md:w-1/3"
          onMouseOver={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          setApi={setApi}
        >
          <CarouselContent>
            {links.map((link, index) => (
              <CarouselItem key={index} className="basis-7/12 pl-2">
                <Poster link={link} id={ids[index] || ""} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex w-full justify-center gap-2 rounded-full px-2 py-2">
        <Button
          className=" w-full animate-wiggle rounded-3xl bg-advertisement-button px-2 py-4 text-xl font-normal text-white md:w-1/3"
          onClick={() => router.push("/r/" + ids[current - 1])}
        >
          Nhận mã ưu đãi ngay
        </Button>
      </div>
    </div>
  );
};

export default PostersMenu;

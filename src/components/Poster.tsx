import { useRouter } from "next/navigation";
import { FC } from "react";

interface PosterProps {
  id: string;
  link: string;
}

const Poster: FC<PosterProps> = ({ link, id }) => {
  const router = useRouter();
  return (
    <div
      className="flex aspect-square h-[42vh] w-[48vw] items-center justify-center rounded-3xl md:h-[52vh] md:w-[18vw]"
      onClick={() => 
        router.push("/r/" + id)
      }
    >
      <img src={link} className=" h-full w-full rounded-md" />
    </div>
  );
};

export default Poster;

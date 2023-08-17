"use client";

import { FC } from "react";
import { Song } from "../../types";
import useLoadImage from "@/hooks/getSongs";
import { BiPlay } from "react-icons/bi";
import Image from "next/image";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className=" 
        flex 
        flex-col
        w-full
        p-3
        rounded-md
        bg-neutral-800/80
        hover:bg-neutral-800/50
        hover:drop-shadow-sm
        cursor-pointer
        transition
        group
        "
    >
      <div
        className="
        relative
        aspect-square 
        rounded-md 
        w-full 
        h-full 
        mb-3
        overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imagePath || "/images/liked-songs.png"}
          fill
          alt="Song Image"
        />
        <div
          className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        justify-center
        p-2
        drop-shadow-md
        bottom-5
        right-5
        bg-green-500
        group-hover:opacity-100
        hover:scale-110
      "
        >
          <BiPlay className="text-black" size={26} />
        </div>
      </div>
      <div className="
        flex
        flex-col
        items-start
        w-full
      ">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="
            text-neutral-400
            text-sm
        ">By {data.author}</p>
      </div>
    </div>
  );
};

export default SongItem;

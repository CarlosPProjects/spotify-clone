import { FC } from "react";
import { Song } from "../../types";
import useLoadImage from "@/hooks/getSongs";
import Image from "next/image";
import { BiPlay } from "react-icons/bi";

interface SidebarSongProps {
  data: Song;
  onClick: (id: string) => void;
}

const SidebarSong: FC<SidebarSongProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <button
      onClick={() => {
        data.id;
      }}
      className="
            relative
            group
            flex
            items-center
            rounded-md
            overflow-hidden
            gap-8
            hover:bg-neutral-100/10
            transition
            pr-4
        "
    >
      <div
        className="
            relative
            min-h-[64px]
            max-w-[100px]
            aspect-video
        "
      >
        <Image
          className="object-cover rounded-md object-center"
          src={imagePath || "/images/liked-songs.png"}
          alt={data.title}
          fill
        />
      </div>
      <div
        className="
        flex
        flex-col
        items-start
      "
      >
        <p className="font-semibold truncate">{data.title}</p>
        <p
          className="
            text-neutral-400
            text-sm
        "
        >
          By {data.author}
        </p>
      </div>
    </button>
  );
};

export default SidebarSong;

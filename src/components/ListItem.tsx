"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { BiPlay } from "react-icons/bi";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // Add authentication before push
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="
            relative
            group
            flex
            items-center
            rounded-md
            overflow-hidden
            sm:gap-x-4
            gap-x-2
            bg-neutral-100/10
            hover:bg-neutral-100/20
            transition
            pr-4
        "
    >
      <div
        className="
            relative
            min-h-[64px]
            min-w-[64px]
            aspect-square
        "
      >
        <Image src={image} alt={name} fill />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div
        className="
        absolute
        transition
        opacity-0
        rounded-full
        flex
        items-center
        justify-center
        bg-green-500
        p-2
        drop-shadow-md
        right-5
        group-hover:opacity-100
        hover:scale-110
      "
      >
        <BiPlay className="text-black" size={26} />
      </div>
    </button>
  );
};

export default ListItem;

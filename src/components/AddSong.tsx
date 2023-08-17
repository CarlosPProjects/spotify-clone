"use client";

import { FC } from "react";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModalStore";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { BiPlus } from "react-icons/bi";

interface AddSongProps {}

const AddSong: FC<AddSongProps> = ({}) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: Check for subscription

    return uploadModal.onOpen();
  };

  return (
    <div
      onClick={onClick}
      className=" 
        flex 
        flex-col
        max-w-[220px]
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
        bg-black 
        mb-3
        overflow-hidden
        "
      >
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
          <BiPlus className="text-black" size={26} />
        </div>
      </div>
      <div
        className="
        flex
        flex-col
        items-start
        w-full
      "
      >
        <p className="font-semibold truncate w-full">Upload a song</p>
        <p
          className="
            text-neutral-400
            text-sm
        "
        >
          Upload a song
        </p>
      </div>
    </div>
  );
};

export default AddSong;

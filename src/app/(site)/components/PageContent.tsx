"use client"

import { FC } from "react";
import { Song } from "../../../../types";
import SongItem from "@/components/SongItem";

interface PageContentProps {
  songs: Song[];
}

const PageContent: FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">Nothing to show</div>;
  }
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-6
        gap-4
        mt-4
      "
    >
      {songs.map((song) => (
        <SongItem key={song.id} onClick={() => {}} data={song} />
      ))}
    </div>
  );
};

export default PageContent;

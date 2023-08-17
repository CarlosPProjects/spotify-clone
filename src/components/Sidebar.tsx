"use client"

import { FC } from "react";
import SidebarSong from "./SidebarSong";
import { Song } from "../../types";

interface SidebarProps {
  songs: Song[];
}

const Sidebar: FC<SidebarProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">Nothing to show</div>;
  }
  return (
    <section className="hidden overflow-y-auto xl:flex flex-col w-[300px] py-5 pl-10 pr-5 gap-y-12 border-l border-neutral-400/40 rounded-tr-2xl rounded-br-2xl">
      <h3 className="text-xl font-medium">Recomended</h3>
      <div className="grid grid-cols-1 w-full overflow-y-auto overflow-x-hidden gap-y-6">
        {songs.map((song) => (
          <SidebarSong key={song.id} onClick={() => {}} data={song} />
        ))}
      </div>
    </section>
  );
};

export default Sidebar;

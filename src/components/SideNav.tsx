"use client";

import { FC, useMemo } from "react";
import Image from "next/image";
import Box from "./Box";
import { usePathname } from "next/navigation";
import {
  LuHome,
  LuPodcast,
  LuLibrary,
  LuHeadphones,
  LuPlayCircle,
  LuMusic2,
} from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import SidebarItem from "./SidebarItem";

interface SidenavProps {
  children: React.ReactNode;
}

const SideNav: FC<SidenavProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: LuHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: LuLibrary,
        label: "Library",
        active: pathname === "/library",
        href: "/library",
      },
      {
        icon: LuHeadphones,
        label: "Artists",
        active: pathname === "/artists",
        href: "/artists",
      },
      {
        icon: LuPodcast,
        label: "Podcasts",
        active: pathname === "/podcasts",
        href: "/podcasts",
      },
    ],
    [pathname]
  );

  const likedRoutes = useMemo(
    () => [
      {
        icon: LuPlayCircle,
        label: "Liked Albums",
        active: pathname === "/liked-albums",
        href: "/liked-albums",
      },
      {
        icon: LuMusic2,
        label: "Liked songs",
        active: pathname === "/liked-songs",
        href: "/liked-songs",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full md:p-4 p-0 bg-[url('/images/bg-home.webp')] bg-cover bg-no-repeat bg-center">
      <div className="hidden overflow-y-auto md:flex flex-col w-[300px] p-5 gap-y-6 border-r border-neutral-400/40 rounded-tl-2xl rounded-bl-2xl bg-stone-800/70 backdrop-blur">
        <Box>
          <Image
            src="/images/logo.png"
            alt="Spotify Logo"
            width={150}
            height={45}
          />
        </Box>
        <Box>
          <div
            className="
        flex 
        justify-between  
        items-center 
        rounded-full 
        bg-neutral-400/30
        border
        border-neutral-400/40
        py-3 px-4 
        backdrop-blur
        mt-2
        "
          >
            <RiSearch2Line size={26} />
            <form action="" method="post">
              <input
                type="text"
                placeholder="Search ..."
                className="
            text-base
            bg-transparent
            outline-none
            placeholder:text-neutral-300
            h-fit
            "
              />
            </form>
          </div>
        </Box>
        <Box>
          <div
            className="
          flex
          flex-col
          gap-y-5
          "
          >
            <h3 className="text-2xl text-white">Menu</h3>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box>
          <div
            className="
          flex
          flex-col
          gap-y-5
          "
          >
            <h3 className="text-2xl text-white">Library</h3>
            {likedRoutes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 md:p-5 p-2 overflow-hidden overflow-y-auto bg-stone-800/70 backdrop-blur">
        {children}
      </main>
    </div>
  );
};

export default SideNav;

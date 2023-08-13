"use client";

import { FC, useMemo } from "react";
import Image from "next/image";
import Box from "./Box";
import { usePathname } from "next/navigation";
import {
  LuSearch,
  LuHome,
  LuPodcast,
  LuLibrary,
  LuHeadphones,
  LuPlayCircle,
  LuMusic2,
} from "react-icons/lu";
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
    <div className="flex h-full sm:p-2 p-4 bg-[url('/images/bg-home.webp')] bg-cover bg-no-repeat bg-center">
      <div className="hidden md:flex flex-col w-[300px] p-5 gap-y-6 border-r border-neutral-400/50 rounded-tl-2xl rounded-bl-2xl bg-stone-800/70 backdrop-blur">
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
        bg-neutral-400/60
        py-2 px-4 
        backdrop-blur
        mt-2
        "
          >
            <LuSearch size={26} />
            <form action="" method="post">
              <input
                type="text"
                placeholder="Search ..."
                className="
            text-xl
            bg-transparent
            outline-none
            placeholder:text-neutral-300
            h-fit
            max-w-[160px]
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
      <div className="flex flex-1 p-5 rounded-tr-2xl rounded-br-2xl bg-stone-800/70 backdrop-blur">
        {children}
      </div>
    </div>
  );
};

export default SideNav;

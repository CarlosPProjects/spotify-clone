"use client";

import { useRouter } from "next/navigation";
import { FC, Fragment } from "react";
import { twMerge } from "tailwind-merge";
import {
  BiChevronLeft,
  BiChevronRight,
  BiUser,
} from "react-icons/bi";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Box from "./Box";
import Image from "next/image";
import useAuthModal from "@/hooks/useAuthModalStore";
import { useUser } from "@/hooks/useUser";
import DropdownUser from "./DropdownUser";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part !== "");
  
  const { user, userDetails } = useUser();
  
  return (
    <div
      className={twMerge(
        `
        h-fit
        md:px-4 sm:py-2
        px-2
    `,
        className
      )}
    >
      <div
        className="
            w-full
            mb-4
            flex
            items-center
            justify-between
            flex-wrap
        "
      >
        <div
          className="
                flex
                md:hidden
                items-center
            "
        >
          <Box className="p-0">
            <Image
              src="/images/mobile-logo.png"
              alt="Spotify Logo"
              width={50}
              height={50}
            />
          </Box>
        </div>
        {pathname !== "/" ? (
          <div
            className="
                hidden
                md:flex
                gap-x-4
                items-center
            "
          >
            <button
              onClick={router.back}
              className="
            rounded-full
            bg-neutral-400/20
            flex
            items-center
            justify-center
            hover:opacity-75
            py-1
            px-1
            mr-4
            transition
          "
            >
              <BiChevronLeft className="text-white" size={28} />
            </button>
            <span
              className="
                text-neutral-400
            "
            >
              Home
            </span>
            <BiChevronRight className="text-white" size={28} />
            {pathParts.map((part, index) => (
              <Fragment key={index}>
                {index > 0 && (
                  <BiChevronRight className="text-white" size={28} />
                )}
                <span className="capitalize">{part}</span>
              </Fragment>
            ))}
          </div>
        ) : (
          <>
            <span className="hidden md:block">Home</span>
          </>
        )}
        <div className="flex justify-between items-center gap-x-2">
          {user ? (
            <>
              <Button className="mr-4" onClick={() => {}}>
                Upgrade
              </Button>

              <div
                className="
                relative
                max-w-[36px]
                max-h-[36px]
                h-full
                w-full
                flex
                justify-center
                items-center
                border
                border-green-500
                bg-neutral-400/20
                rounded-full
              "
              >
                {userDetails?.avatar_url ? (
                  <img
                    className="
                    rounded-full
                    object-cover
                    aspect-square
                  "
                    src={userDetails?.avatar_url}
                    alt="User Avatar"
                  />
                ) : (
                  <BiUser className="text-neutral-400 m-2" size={20} />
                )}
              </div>
              <span className="text-white">
                {userDetails?.first_name ?? "Carlos"}
              </span>
              {/* <Button className="p-0 bg-transparent">
                <BiCaretDown className="text-neutral-400" size={16} />
              </Button> */}
              <DropdownUser/>
            </>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
              bg-transparent
              "
                >
                  Register
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
              bg-neutral-400/20
              
              "
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;

"use client";

import React, { FC, useState } from "react";
import { BiCaretDown, BiLinkExternal } from "react-icons/bi";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import Button from "./Button";
import { twMerge } from "tailwind-merge";

interface DropdownUserProps {
  children: React.ReactNode;
  className?: string;
}

const DropdownUser: FC<DropdownUserProps> = ({ children, className }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO: Reset any playing songs
    router.refresh();

    if (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className={twMerge(`relative`, className)}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {children}
      </div>

      {showDropdown && (
        <div className="absolute z-10 flex min-w-[196px] bg-neutral-800/50 border border-neutral-400/40 rounded-[2px] backdrop-blur right-0 mt-3 md:mt-5">
          <ul className="p-1 flex w-full flex-col">
            <li>
              <Button
                onClick={() => router.push("/account")}
                className="w-full flex flex-row justify-between items-center p-0 bg-transparent"
              >
                <span>Account</span>
                <BiLinkExternal size={16} />
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {}}
                className="w-full flex flex-row justify-between items-center p-0 bg-transparent"
              >
                <span>Upgrade</span>
              </Button>
            </li>
            <li>
              <Button
                onClick={() => router.push("/configuration")}
                className="w-full flex flex-row justify-between items-center p-0 bg-transparent"
              >
                <span>Configuration</span>
                <BiLinkExternal size={16} />
              </Button>
            </li>
            <hr className="border-neutral-400/40 my-1" />
            <li>
              <Button
                onClick={handleLogout}
                className="w-full flex flex-row justify-between items-center p-0 bg-transparent"
              >
                <span>Log out</span>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownUser;

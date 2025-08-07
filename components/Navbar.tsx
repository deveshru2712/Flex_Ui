import React from "react";
import Toggle from "./Toggle";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-12 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-between items-center">
          <Link href={"/"} className="text-2xl font-medium font-geist">
            <div className="flex items-center gap-1.5">
              <Image
                src={"/assets/icon.svg"}
                alt="icon"
                height={30}
                width={30}
              />
              Flex UI
            </div>
          </Link>

          <div>
            <ul className="hidden  items-center justify-between text-xl font-medium gap-10 font-geist">
              <li>
                <Link href={"/components"}>Components</Link>
              </li>

              <li>
                <Link href={"/calender"}>Time Frame</Link>
              </li>

              <li>
                <Link href={"/about"}>About Me</Link>
              </li>
            </ul>
          </div>

          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

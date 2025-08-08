import React from "react";
import Toggle from "./Toggle";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 sm:px-8 md:px-12 dark:bg-black/50 bg-white/50 backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="text-2xl font-medium font-geist">
            <div className="flex items-center gap-1.5">
              <Image
                src="/assets/icon.svg"
                alt="Flex UI Logo"
                height={30}
                width={30}
                priority
              />
              <span>Flex UI</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center dark:text-slate-200 justify-between text-lg font-medium gap-8 font-geist">
              <li>
                <Link
                  href="/components"
                  className="hover:opacity-80 transition-opacity"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/yourusername/flex-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:opacity-80 transition-opacity"
                >
                  About Me
                </Link>
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

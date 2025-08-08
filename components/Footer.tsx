"use client";
import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm dark:text-gray-400 text-gray-600">
            © {new Date().getFullYear()} Flex UI. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
              >
                Documentation
              </Link>
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 dark:bg-gray-700 rounded whitespace-nowrap">
                Coming Soon
              </div>
            </div>
            <div className="relative group">
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
              >
                Examples
              </Link>
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 dark:bg-gray-700 rounded whitespace-nowrap">
                Coming Soon
              </div>
            </div>
            <Link
              href="https://github.com/deveshru2712/Flex_Ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

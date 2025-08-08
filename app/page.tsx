import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightToLine } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white transition-colors duration-300 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-5xl h-full mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row justify-between font-geist gap-8">
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="w-full text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
                Flex UI
              </h1>
            </div>

            <div className="mt-2 w-full md:w-3/4">
              <p className="text-lg sm:text-xl font-medium dark:text-slate-200 text-gray-600 leading-relaxed">
                A minimalist component library built for modern web
                applications. Clean, accessible, and completely open source.
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="/components/Card_reveal"
                className="inline-flex items-center gap-2 rounded-md px-5 py-1.5 bg-black text-white dark:bg-white dark:text-black text-lg font-medium hover:opacity-90 transition-opacity"
                aria-label="Browse components"
              >
                Browse Components
                <ArrowRightToLine className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex-1 flex items-center">
            <div className="w-full max-w-md bg-gray-900 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 ml-2 text-sm">terminal</span>
              </div>
              <div className="font-mono text-gray-300">
                <p className="text-green-400">$ npm install flex-ui</p>
                <p className="my-2">CLI coming soon...</p>
                <p className="text-green-400">$ _</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

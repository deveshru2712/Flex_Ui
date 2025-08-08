"use client";
import React from "react";
import { Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  DC
                </span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Devesh Chandra
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <div className="max-w-lg mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating beautiful, functional web experiences. I
              love building with modern technologies and bringing ideas to life
              through code.
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                Open to work
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/deveshru2712"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border hover:bg-accent transition-all duration-200 hover:scale-105"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/deveshru2712"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border hover:bg-accent transition-all duration-200 hover:scale-105"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:deveshru2712@gmail.com"
              className="p-3 rounded-lg border hover:bg-accent transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Get in touch
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-3 border rounded-lg font-medium hover:bg-accent transition-colors text-center"
            >
              View my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

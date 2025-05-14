"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-start relative overflow-hidden">
      {/* Full page gradient background */}
      <div className="fixed inset-0 w-full min-h-screen bg-gradient-to-b from-black via-sky-900 via-30% to-black to-90% -z-30"></div>

      {/* Desktop background video */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-video hidden md:block -z-20">
        <iframe
          src="https://player.vimeo.com/video/110625611?h=b1fdcc6727&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&transparent=1"
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Overlay to ensure text is readable */}
      
      {/* Hero Section */}
      <section className="w-full flex-none flex flex-col relative overflow-hidden md:h-screen md:items-center md:justify-center md:pt-0 items-start justify-start pt-8">
        {/* Gradient background for mobile */}
        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center md:mt-0 md:mb-0 mt-4 mb-6 text-white !text-white relative z-20">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white animate-fade-down animate-duration-700">
            Telling true stories that matter
          </h1>
          <p className="max-w-[42rem] text-white text-xl sm:text-2xl leading-normal animate-fade-down animate-delay-300">
            A company that does it all.
          </p>
          <div className="animate-fade-up animate-delay-500">
            <Link href="/our-work">
              <Button size="lg" className="text-lg px-8 py-6">
                View Our Work <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    {/* Mobile video below hero */}
    <div className="block w-full aspect-video flex-none md:mt-0 mt-6 mb-4 relative z-10">
      <iframe
        src="https://player.vimeo.com/video/110625611?h=b1fdcc6727&autoplay=1&loop=1&byline=0&title=0&muted=1&transparent=1"
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </main>
  );
}

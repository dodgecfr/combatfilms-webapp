"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export function PhotoGallery() {
  const photos: Photo[] = [
    {
      src: "/images/kapyong/213th A Battery in Richfield Aug. 19, 1950_CLEAN.jpg",
      alt: "213th A Battery in Richfield, August 19, 1950",
      caption: "213th A Battery before deployment, Richfield, Utah, August 1950"
    },
    {
      src: "/images/kapyong/BL_124_Korea_006_Chinese POWs captured during Communist spring offensive_April 1951.jpg",
      alt: "Chinese POWs captured during Communist spring offensive, April 1951",
      caption: "Chinese prisoners captured by UN forces during the spring offensive"
    },
    {
      src: "/images/kapyong/BT_051_Arlow Farnsworth holding a kitten in camp.jpg",
      alt: "Arlow Farnsworth holding a kitten in camp",
      caption: "A moment of levity: Arlow Farnsworth with a kitten at camp"
    },
    {
      src: "/images/kapyong/DHM_142_Kumhwa Valley view from Kumhwa Pass position.jpg",
      alt: "Kumhwa Valley view from Kumhwa Pass position",
      caption: "Looking over Kumhwa Valley from the 213th's position"
    },
    {
      src: "/images/kapyong/DL_036_213th Armd FA BN sign_straight.jpg",
      alt: "213th Armored Field Artillery Battalion sign",
      caption: "Sign marking the 213th Armored Field Artillery Battalion's position"
    },
    {
      src: "/images/kapyong/ER_111a_M7 105mm howitzer_\"The Thing\".jpg",
      alt: "M7 105mm howitzer 'The Thing'",
      caption: "The 213th's M7 105mm self-propelled howitzer nicknamed 'The Thing'"
    },
    {
      src: "/images/kapyong/LH_020a_burned out Russian jeep.jpg",
      alt: "Burned out Russian jeep",
      caption: "Destroyed Russian jeep left behind after battle"
    },
    {
      src: "/images/kapyong/RO_034_Kumhwa, Korea_ Lt Col. Dalley.jpg",
      alt: "Lt. Col. Dalley in Kumhwa, Korea",
      caption: "Lt. Col. Frank Dalley, commander of the 213th, in Kumhwa"
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openPhoto = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextPhoto();
    if (e.key === "ArrowLeft") prevPhoto();
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer group"
            onClick={() => openPhoto(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="w-full p-2 text-white text-sm truncate">
                {photo.alt}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="max-w-4xl p-0 bg-background/95 backdrop-blur-sm" 
          onKeyDown={handleKeyDown}
        >
          <DialogClose className="absolute right-4 top-4 z-10">
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="relative aspect-[4/3] w-full">
            <Image
              src={photos[selectedIndex]?.src || ""}
              alt={photos[selectedIndex]?.alt || ""}
              fill
              className="object-contain"
            />
          </div>

          <div className="p-4">
            <p className="font-medium">{photos[selectedIndex]?.alt || ""}</p>
            {photos[selectedIndex]?.caption && (
              <p className="text-sm text-muted-foreground mt-1">
                {photos[selectedIndex]?.caption}
              </p>
            )}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-1/4 flex items-center justify-start px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="bg-background/80 rounded-full p-2 hover:bg-background"
              aria-label="Previous photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/4 flex items-center justify-end px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="bg-background/80 rounded-full p-2 hover:bg-background"
              aria-label="Next photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 
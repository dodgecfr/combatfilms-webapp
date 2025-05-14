"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "I was just going on guard duty at five minutes to two, and all hell broke loose. If you've ever seen fireworks, it was there that night.",
      author: "Gordon Farnsworth",
      role: "Member of the 213th",
    },
    {
      quote: "My thoughts turned to God and I knew that our safety was in the hands of our Maker. I feel sure I was guided by a Supreme Being.",
      author: "Lt. Col. Frank Dalley",
      role: "Commander of the 213th",
    },
    {
      quote: "We went over as boys and came back as men.",
      author: "Elwood Bladen",
      role: "Member of the 213th",
    },
    {
      quote: "They found out that southern Utah guardsmen stem the tide.",
      author: "Max Bonzo",
      role: "Member of the 213th",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden py-10 bg-muted/40 rounded-xl">
      <div className="absolute top-6 left-10 opacity-70">
        <Quote className="size-10 text-primary/30" />
      </div>

      <div className="relative px-6 sm:px-12 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="min-h-32 flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "transition-opacity duration-1000 absolute max-w-2xl text-center",
                  currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <p className="text-xl italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "size-2 rounded-full transition-all",
                  currentIndex === index
                    ? "bg-primary w-4"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
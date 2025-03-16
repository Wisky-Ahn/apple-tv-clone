"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface TrailerItem {
  id: string;
  title: string;
  genre?: string;
  duration?: string;
  type?: string;
  imageUrl: string;
}

interface TrailersSectionProps {
  title: string;
  items: TrailerItem[];
  viewAllLink?: string;
}

export default function TrailersSection({
  title,
  items,
  viewAllLink,
}: TrailersSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8">
      <div className="container px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">{title}</h2>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              See All
            </Link>
          )}
        </div>

        <div className="relative group">
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-none w-[280px] sm:w-[320px]"
              >
                <Link href={`/trailer/${item.id}`} className="group cursor-pointer">
                  <div className="relative flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-0.5"></div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      {item.type && <p className="text-xs font-semibold text-gray-400 uppercase">{item.type}</p>}
                      <h3 className="font-semibold mt-1 text-sm sm:text-base">{item.title}</h3>

                      <div className="flex items-center gap-2 mt-1">
                        {item.genre && <span className="text-xs text-gray-400">{item.genre}</span>}
                        {item.duration && (
                          <>
                            {item.genre && <span className="text-xs text-gray-400">•</span>}
                            <span className="text-xs text-gray-400">{item.duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
